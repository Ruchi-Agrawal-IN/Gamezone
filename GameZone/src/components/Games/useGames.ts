import useData from "../hooks/useData";

interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const useGame = () => useData<Game>("/games");
export default useGame;
