import axios from 'axios';
// @ts-nocheck

export const $api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});
