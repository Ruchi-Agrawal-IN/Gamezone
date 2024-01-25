// import useData from "../hooks/useData";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import ms from 'ms';
import genre from './Genre'
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiclient = new ApiClient<Genre>('/genres');
// const useGenre = () => useData<Genre>("/genres");
//const useGenre = () => ({ data: genres, isLoading: false, error: null });
const useGenre = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiclient.getAll,
    // staleTime: 24*60*60*1000,
    staleTime: ms('24h'),
    initialData: {count: genre.length, results: genre},
    
  
})
export default useGenre;
