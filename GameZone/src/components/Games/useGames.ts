import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import gameService, { Game } from "../services/game-service";
const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gameService.fetchAllGames();
    request
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        return cancel();
      });
  }, []);
  return { games, error, isLoading };
};
export default useGame;
