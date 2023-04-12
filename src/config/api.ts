export const FLICKR_API_KEY = '53d80c0e75ecda6105073797bc211dc4'; //TODO it is not a good idea to keep the key in the code, but for the sake of simplicity I will leave it here for cross-checking

export const API_BASE_URL = 'https://www.flickr.com/services/rest/';

export const getPhotoFromId = (server_id: string, id: string, secret: string) => {
  return `https://live.staticflickr.com/${server_id}/${id}_${secret}.jpg`;
};

// const ENDPOINTS = {
//   getUsers: `${API_BASE_URL}/users`,
// };

// export default ENDPOINTS;
