import { platform } from "os";
import { Game } from "../services/game-service";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
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
          marginBottom={5}
        />
        <Heading size="md">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
