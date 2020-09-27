/* eslint-disable no-restricted-syntax */
class API {
  constructor() {
    this.apiUrl = new URL('https://www.googleapis.com/youtube/v3/');
    this.API_KEY = 'AIzaSyDC2McN7ERPMoqWCo6d_p8PtAtYIk0Dh-s';
    this.queryParams = {
      key: this.API_KEY,
      part: 'snippet',
    };
  }

  async get(route = '/search') {
    let response;
    try {
      const params = {
        ...this.queryParams,
        // ...queryParams,
        type: 'video',
        videoEmbeddable: true,
        maxResults: 25,
      };
      const url = new URL(route, this.apiUrl);
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, value);
      }
      url.searchParams.set('q', 'guadalajara');
      response = await fetch(url);
    } catch (e) {
      console.log(`Error while retrieving info for route ${route}`, e);
    }

    return response && response.json();
  }

  async getEntity(route = '/videos', id) {
    let response;
    if (!id) return [];

    const idParam = typeof id === 'string' ? id : id.join(',');
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
