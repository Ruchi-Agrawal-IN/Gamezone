import {
  Image,
  HStack,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import getCroppedImageURL from "../services/image-url";
import useGenre, { Genre } from "./useGenre";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id}>
          <HStack spacing={3}>
            <Image
              src={getCroppedImageURL(g.image_background)}
              boxSize="32px"
              borderRadius={5}
              marginY={1}
            />
            <Button
              onClick={(g) => onGenreSelection(g)}
              variant="link"
              fontSize="lg"
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
