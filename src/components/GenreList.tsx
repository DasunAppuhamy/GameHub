import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  setSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ setSelectedGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <SkeletonText paddingY={2} key={skeleton} />
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => setSelectedGenre(genre)}
              variant="link"
              fontSize="lg"
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
