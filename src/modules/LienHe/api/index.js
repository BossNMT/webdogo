import axios from 'axios';
import { APP_CONFIG } from 'utils/constants';

export const postLienHe = (payload) => {
  let apiEndpoint = `${APP_CONFIG.apiUrl}/lien-hes`;
  return axios.post(apiEndpoint, payload)
}