import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);
  const path = data?.results[0];

  if (isLoading) return null;
  if (error) throw error;

  return path ? (
    <video src={path?.data[480]} poster={path?.preview} controls />
  ) : null;
};

export default GameTrailer;
