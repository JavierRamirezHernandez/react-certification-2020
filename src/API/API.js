import dataSearch from '../assets/data/search.json';
import dataVideo from '../assets/data/video.json';
import relatedVideo from '../assets/data/related.json';
import favVideos from '../assets/data/favorites.json';

class API {
  constructor() {
    this.apiUrl = new URL('https://www.googleapis.com/youtube/v3/');
    this.API_KEY = 'AIzaSyAlEpcNYV9orZvOMl9Y8fMzpr-3aPWT9JU';
    this.mockData = true;
    this.queryParams = {
      key: this.API_KEY,
      part: 'snippet',
    };
  }

  async get(route = '/search', querySearch = 'wizeline', relatedToVideoId = false) {
    let response;
    try {
      const params = {
        ...this.queryParams,
        q: querySearch,
        type: 'video',
        videoEmbeddable: true,
        maxResults: 25,
      };
      if (relatedToVideoId) {
        if (this.mockData) return relatedVideo;
        delete params.q;
        params['relatedToVideoId'] = relatedToVideoId;
      } else if (!querySearch) {
        if (this.mockData) return dataSearch;
        return null;
      }
      if (this.mockData) return dataSearch;
      const url = new URL(route, this.apiUrl);
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, value);
      }
      response = await fetch(url);
    } catch (e) {
      console.log(`Error while retrieving info for route ${route}`, e);
    }

    return response && response.json();
  }

  async getEntity(route = '/videos', id) {
    let response;
    if (!id) return [];

    let idParam = id;
    if (typeof id !== 'string') {
      idParam = id.join(',');
      if (this.mockData) return favVideos;
    }
    if (this.mockData) return dataVideo;

    const queryParams = {
      id: idParam,
    };
    try {
      const params = {
        ...this.queryParams,
        ...queryParams,
      };
      const url = new URL(route, this.apiUrl);
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, value);
      }
      response = await fetch(url);
    } catch (e) {
      console.log(`Error while retrieving info for route ${route}`, e);
    }

    return response && response.json();
  }
}

export default new API();
