import apiclient from "../services/api-client";
export interface Genre {
  id: number;
  name: "string";
  slug: "string";
  game_count: number;
  image_background: string;
}

export interface fetchGenres {
  count: number;
  results: Genre[];
}
class GenreService {
  fetchAllGenres() {
    const controller = new AbortController();
    const request = apiclient.get<fetchGenres>("/genres", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}
export default new GenreService();
