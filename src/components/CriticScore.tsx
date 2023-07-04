import { Badge } from "@chakra-ui/react";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}
const CriticScore = ({ game }: Props) => {
  let color =
    game.metacritic > 75 ? "green" : game.metacritic > 60 ? "yellow" : "red";
  return (
    <>
      <Badge
        fontSize="14px"
        borderRadius="4px"
        paddingX={2}
        colorScheme={color}
      >
        {game.metacritic}
      </Badge>
    </>
  );
};

export default CriticScore;
