import axios from 'axios';

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

class AxiosClient {
  // Handle Get requests.
  async get<T>(
    endpoint: string,
    query?: Record<string, string | number>,
  ): Promise<T> {
    const response = await Axios.get(endpoint, { params: query });
    return response.data;
  }
}

const axiosClient = new AxiosClient();
export default axiosClient;
