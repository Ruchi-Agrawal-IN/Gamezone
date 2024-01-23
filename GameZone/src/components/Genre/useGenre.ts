// import useData from "../hooks/useData";
import { useQuery } from "@tanstack/react-query";
import apiclient, { FetchResponse } from "../services/api-client";
import genre from './Genre'
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenre = () => useData<Genre>("/genres");
//const useGenre = () => ({ data: genres, isLoading: false, error: null });
const useGenre = () => useQuery({
  queryKey: ['genres'],
  queryFn:() =>
    apiclient.get<FetchResponse<Genre>>('/genres')
    .then(res => res.data),
    staleTime: 24*60*60*1000,
    initialData: {count: genre.length, results: genre},
    
  
})
export default useGenre;
