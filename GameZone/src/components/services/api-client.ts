import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "294b8017e2c34473aad1b1aafb6efddd",
  },
});
class ApiClient<T>{
  endpoint: string;
  constructor(endPoint: string){
    this.endpoint = endPoint;
  }
  getAll = (config: AxiosRequestConfig) => {
      return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data)
  }
}

export default ApiClient;
