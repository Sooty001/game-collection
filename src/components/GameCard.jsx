function GameCard({ game, onChangeStatus, onDelete }) {
  return (
    <div className="card">
      <h5 className="card-title">{game.title}</h5>
      <p className="card-text">
        Жанр: {game.genre} | Магазин: {game.store} | Разработчик: {game.developer} | Дата
        релиза: {game.releaseDate}
      </p>
      <div className="button-group">
        {game.status !== 'NOW_PLAYING' && (
          <button
            className="btn-success"
            onClick={() => onChangeStatus(game.id, 'NOW_PLAYING')}
          >
            Играть
          </button>
        )}
        {game.status !== 'IN_COLLECTION' && (
          <button
            className="btn-primary"
            onClick={() => onChangeStatus(game.id, 'IN_COLLECTION')}
          >
            В коллекцию
          </button>
        )}
        {game.status !== 'ARCHIVED' && (
          <button
            className="btn-warning"
            onClick={() => onChangeStatus(game.id, 'ARCHIVED')}
          >
            В архив
          </button>
        )}
        <button className="btn-danger" onClick={() => onDelete(game.id)}>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default GameCard;