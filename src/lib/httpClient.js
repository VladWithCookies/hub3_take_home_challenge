import axios from 'axios';

import { API_HOST } from '../constants';

const httpClient = axios.create({ baseURL: API_HOST });

export default httpClient;
