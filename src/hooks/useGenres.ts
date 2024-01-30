// import useData from "./useData";
import genres from '../data/genres'

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}


// const useGenres = () => useData<Genre>("/genres")
//we shipped genre list using static data as it will hardly change and this will save the extra request to server and improves performance
const useGenres = () => ({ data: genres, error:false, isLoading:null })

export default useGenres;