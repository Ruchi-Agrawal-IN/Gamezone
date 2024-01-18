import useData from "../hooks/useData";
export interface Platform {
  id: number;
  name: string;
  slug: string;
  image_Background: string;
}

const usePlatforms = () => useData<Platform>("platforms/lists/parents");

export default usePlatforms;
