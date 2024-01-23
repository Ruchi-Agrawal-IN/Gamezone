import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../../App";
import { Platform } from "../Platforms/usePlatforms";
import ApiClient, {FetchResponse} from "../services/api-client";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// const useGame = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         parent_platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText,
//       },
//     },
//     [gameQuery]
//   );
// implementation using useQuery()
  // const useGame = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>,Error>({
  //   queryKey: ['games', gameQuery],
  //   queryFn: ()=> apiclient.get<FetchResponse<Game>>('/games', {
  //     params: {
  //       genres: gameQuery.genre?.id,
  //       parent_platforms: gameQuery.platform?.id,
  //       ordering: gameQuery.sortOrder,
  //       search: gameQuery.searchText,
  //     },
  //   })
  //    .then(res => res.data),         
  // })

  //optimised code using ApiClient class
  const apiclient = new ApiClient<Game>('/games');
  const useGame = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>,Error>({
    queryKey: ['games', gameQuery],
    queryFn: ()=> apiclient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    })       
  })
export default useGame;
