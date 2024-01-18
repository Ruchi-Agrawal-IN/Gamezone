import { useEffect, useState } from "react";
import apiclient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const abortController = new AbortController();
      setLoading(true);
      apiclient
        .get<FetchResponse<T>>(endPoint, {
          signal: abortController.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
      return () => abortController.abort();
    },
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};
export default useData;
