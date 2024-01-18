import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "./useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameContainer";
import { GameQuery } from "../../App";
interface Props {
  gameQuery: GameQuery;
}
const GamesGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
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
  );
};

export default GamesGrid;
