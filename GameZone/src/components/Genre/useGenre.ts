import { useEffect, useState } from "react";
import GenreService, { Genre } from "./genre-service";
import { CanceledError } from "axios";

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const { request, cancel } = GenreService.fetchAllGenres();
    setLoading(true);
    request
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
        return cancel();
      });
  }, []);
  return { genres, error, isLoading };
};
export default useGenre;
