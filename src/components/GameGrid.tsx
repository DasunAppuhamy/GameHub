import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error, setGames, setError } = useGames();

  return (
    <>
      {error && <p color="red">{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
