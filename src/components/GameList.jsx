import GameCard from './GameCard';

function GameList({ games, onChangeStatus, onDelete }) {
  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          onChangeStatus={onChangeStatus}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default GameList;