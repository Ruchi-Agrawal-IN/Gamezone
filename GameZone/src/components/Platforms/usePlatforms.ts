import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import ms from 'ms'
export interface Platform {
  id: number;
  name: string;
  slug: string;
  image_Background: string;
}
const apiclient = new ApiClient<Platform>('/platforms/lists/parents');
//const usePlatforms = () => useData<Platform>("platforms/lists/parents");
const usePlatform = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiclient.getAll,
  //staleTime: 24*60*60*1000,
  staleTime: ms('24h'),
})
export default usePlatform;
