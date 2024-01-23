import { useQuery } from "@tanstack/react-query";
import apiclient, { FetchResponse } from "../services/api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
  image_Background: string;
}

//const usePlatforms = () => useData<Platform>("platforms/lists/parents");
const usePlatform = () => useQuery({
  queryKey: ['platforms'],
  queryFn: ()=> apiclient.get<FetchResponse<Platform>>('/platforms/lists/parents')
          .then(res => res.data),
          staleTime: 24*60*60*1000,
})
export default usePlatform;
