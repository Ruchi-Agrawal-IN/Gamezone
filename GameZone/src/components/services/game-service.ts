import apiclient from "./api-client";
export interface Game {
  id: number;
  name: string;
  background_image: string;
}
export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

class GameService {
  fetchAllGames() {
    const controller = new AbortController();
    const request = apiclient.get<FetchGamesResponse>("/games", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

export default new GameService();
