import { useEffect, useState } from "react";
import apiclient from "../services/api-client";
import { CanceledError } from "axios";
interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    apiclient
      .get<FetchResponse<T>>(endPoint, { signal: abortController.signal })
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
  }, []);
  return { data, error, isLoading };
};
export default useData;
