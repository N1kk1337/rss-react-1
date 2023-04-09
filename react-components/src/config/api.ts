// TODO INSERT YOUR API KEY HERE!!!
export const FLICKR_API_KEY = process.env.FLICKR_API_KEY;

export const API_BASE_URL = 'https://www.flickr.com/services/rest/';

export const getPhotoFromId = (server_id: string, id: string, secret: string) => {
  return `https://live.staticflickr.com/${server_id}/${id}_${secret}.jpg`;
};

// const ENDPOINTS = {
//   getUsers: `${API_BASE_URL}/users`,
// };

// export default ENDPOINTS;
