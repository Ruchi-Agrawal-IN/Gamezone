import { Image, Text, HStack, List, ListItem } from "@chakra-ui/react";
import useGenre from "./useGenre";
import getCroppedImageURL from "../services/image-url";
const GenreList = () => {
  const { genres, error } = useGenre();
  return (
    <List>
      {error && <p> Error in Genre Loading! </p>}
      {genres.map((g) => (
        <ListItem key={g.id}>
          <HStack spacing={3}>
            <Image
              src={getCroppedImageURL(g.image_background)}
              boxSize="32px"
              borderRadius={5}
              marginY={1}
            />
            <Text fontSize="lg">{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
