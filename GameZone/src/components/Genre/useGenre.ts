// import useData from "../hooks/useData";
import genres from "../Genre/Genre";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenre = () => useData<Genre>("/genres");
const useGenre = () => ({ data: genres, isLoading: false, error: null });

export default useGenre;
