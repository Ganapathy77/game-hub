import useData from "./useData";
import { Platform } from "./usePlatForms";
import { Genre } from "./userGenres";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
      },
    },
    [selectedGenre?.id]
  );

export default useGames;
