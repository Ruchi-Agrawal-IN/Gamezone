import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "./useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameContainer";
import { Genre } from "../Genre/useGenre";
import { Platform } from "../Platforms/usePlatforms";
interface Props {
  selectedGenre: Genre | null;
  selectedPlatForm: Platform | null;
}
const GamesGrid = ({ selectedGenre, selectedPlatForm }: Props) => {
  const { data, error, isLoading } = useGame(selectedGenre, selectedPlatForm);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={5}>
        {isLoading &&
          skeletons.map((sketltn) => (
            <GameCardContainer key={sketltn}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((g) => (
          <GameCardContainer key={g.id}>
            <GameCard game={g} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
