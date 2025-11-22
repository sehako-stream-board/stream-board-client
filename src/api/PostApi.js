import api from './axiosInstance';

export const postApi = {
  posting: (title, content) =>
    api.post('/post', { title: title, content: content }),

  getPostList: (cursor, size) =>
    api.get('/post', {
      params: { cursor: cursor, size: size },
    }),

  getPostDetail: (no) => api.get(`/post/${no}`),

  removePost: (no) => api.delete(`/post/${no}`),
};
