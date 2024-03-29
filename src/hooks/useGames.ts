import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient, { FetchResponse } from '../services/api-client';
import { Platform } from './usePlatforms';
import useGameQueryStore from '../store';
// import axios from 'axios';

const apiClient = new APIClient<Game>('/games');

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// const useGames = (gameQuery: GameQuery) => {
//   const fetchdata = ({ pageParam = 1 }) =>
//     axios
//       .get<FetchResponse<Game>>(
//         'https://api.rawg.io/api/games?key=9349752c58d4481495a2d5a344b7a60b',
//         {
//           params: {
//             genres: gameQuery.genre?.id,
//             parent_platforms: gameQuery.platform?.id,
//             ordering: gameQuery.sortOrder,
//             search: gameQuery.searchText,
//             page: pageParam,
//           },
//         }
//       )
//       .then((res) => res.data);

//   return useInfiniteQuery<FetchResponse<Game>, Error>({
//     queryKey: ['games', gameQuery],
//     queryFn: fetchdata,
//     getNextPageParam: (lastPage, allPages) => {
//       return lastPage.next ? allPages.length + 1 : undefined;
//     },
//   });
// };
//OR:

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });
};

export default useGames;
