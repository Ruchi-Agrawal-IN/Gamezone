import {
  Image,
  HStack,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageURL from "../services/image-url";
import useGenre, { Genre } from "./useGenre";
interface Props {
  onGenreSelection: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onGenreSelection, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <HStack spacing={3}>
              <Image
                src={getCroppedImageURL(genre.image_background)}
                boxSize="32px"
                borderRadius={5}
                marginY={1}
                objectFit="cover"
              />
              <Button
                onClick={() => onGenreSelection(genre)}
                variant="link"
                fontSize="lg"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
