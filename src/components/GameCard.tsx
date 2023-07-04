import { Box, Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card height="100%">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore game={game} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Box position="absolute" bottom={3} right={3} boxSize="fit-content">
            <Emoji rating={game.rating_top} />
          </Box>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
