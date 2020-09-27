import { useState, useEffect } from 'react';
import API from './API';

const useApi = (entity, id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    API.getEntity(entity, id)
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
