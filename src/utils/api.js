import axios from 'axios';

export const API_BASE_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:2000/api'
  : 'https://api.parekhchamber.com/api';

export const IMAGE_BASE_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:2000'
  : 'https://api.parekhchamber.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const productApi = {
  getAll: (siteId) => api.get(`/product?siteId=${siteId}`),
};

export const categoryApi = {
  getAll: (siteId) => api.get(`/category?siteId=${siteId}`),
};

export const blogApi = {
  getAll: (siteId) => api.get(`/blogs?siteId=${siteId}`),
  getById: (id) => api.get(`/blogs/${id}`),
  getHeader: (siteId) => api.get(`/blog-header/${siteId}`),
};

export const careerApi = {
  getAll: (siteId) => api.get(`/careers?siteId=${siteId}`),
};

export const careerHeaderApi = {
  get: (siteId) => api.get(`/career-header/${siteId}`),
};

export const mediaApi = {
  getAll: (siteId) => api.get(`/media-events?siteId=${siteId}`),
};

export const managementApi = {
  getContent: (siteId) => api.get(`/management/content?siteId=${siteId}`),
  getMembers: (siteId) => api.get(`/management/members?siteId=${siteId}`),
};

export const circularApi = {
  getHeader: (siteId) => api.get(`/circular-header/${siteId}`),
  getAll: (siteId) => api.get(`/circulars?siteId=${siteId}`),
};

export const equotationHeaderApi = {
  get: (siteId) => api.get(`/equotation-header/${siteId}`),
};

export const equotationApi = {
  list: (siteId) => api.get(`/equotations?siteId=${siteId}`),
};

export const eauctionHeaderApi = {
  get: (siteId) => api.get(`/eauction-header/${siteId}`),
};

export const eauctionApi = {
  list: (siteId) => api.get(`/eauctions?siteId=${siteId}`),
};

export const tenderHeaderApi = {
  get: (siteId) => api.get(`/tender-header/${siteId}`),
};

export const tenderApi = {
  list: (siteId) => api.get(`/tenders?siteId=${siteId}`),
};

export default api;
