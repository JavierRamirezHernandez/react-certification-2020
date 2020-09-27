import { useState, useEffect } from 'react';
import API from './API';

const useApi = (entity, id, relatedToVideoId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    let requestPromisse;
    if (entity === 'search') {
      requestPromisse = API.get(entity, id, relatedToVideoId);
    } else {
      requestPromisse = API.getEntity(entity, id);
    }
    requestPromisse
      .then((response) => {
        if (response['error']) throw response['error']['message'];
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setData(null);
        setIsLoading(false);
        console.error(error);
      });
  }, [entity, id]);
  return { isLoading, data };
};

export default useApi;
