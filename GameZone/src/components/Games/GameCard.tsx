import { Game } from "../services/game-service";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card maxW="lg">
      <CardBody>
        <Image
          src={game.background_image}
          alt="movie poster"
          borderRadius="lg"
        />
        <Heading size="md">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
