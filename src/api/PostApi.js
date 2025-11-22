import api from './axiosInstance';

export const postApi = {
  getPostList: (cursor, size) =>
    api.get('/post', {
      params: { cursor: cursor, size: size },
    }),
};
