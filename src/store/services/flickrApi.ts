import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL, FLICKR_API_KEY } from '../../config/api';
import { PhotoDetails } from 'components/ModalCard/ModalCard';

interface Photo {
  id: string;
  server_id: string;
  secret: string;
  title: string;
  ownerName: string;
}

interface FlickrPhoto {
  id: string;
  title: string;
  ownername: string;
  server: string;
  secret: string;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    fetchPhotos: builder.query<Photo[], string>({
      query: (searchValue) => {
        const method =
          searchValue === '' ? 'flickr.interestingness.getList' : 'flickr.photos.search';
        const searchParam = searchValue === '' ? '' : `&text=${searchValue}`;
        return `?method=${method}&api_key=${FLICKR_API_KEY}${searchParam}&extras=owner_name&per_page=12&page=1&format=json&nojsoncallback=1`;
      },
      transformResponse: (response: { photos: { photo: FlickrPhoto[] } }) => {
        return response.photos.photo.map((photo) => ({
          id: photo.id,
          title: photo.title,
          ownerName: photo.ownername,
          secret: photo.secret,
          server_id: photo.server,
        }));
      },
    }),
    fetchPhotoInfo: builder.query<PhotoDetails, string>({
      query: (id) => ({
        url: `?method=flickr.photos.getInfo&api_key=${FLICKR_API_KEY}&photo_id=${id}&format=json&nojsoncallback=1`,
      }),
      transformResponse: (response: { photo: PhotoDetails }) => {
        return response.photo;
      },
    }),
  }),
});

export const { useFetchPhotosQuery, useFetchPhotoInfoQuery } = api;
