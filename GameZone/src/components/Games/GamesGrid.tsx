import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "./useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameContainer";

const GamesGrid = () => {
  const { games, error, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={5}>
        {isLoading &&
          skeletons.map((sketltn) => (
            <GameCardContainer>
              <GameCardSkeleton key={sketltn} />{" "}
            </GameCardContainer>
          ))}
        {games.map((g) => (
          <GameCardContainer>
            <GameCard key={g.id} game={g} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
