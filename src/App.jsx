import { useState, useEffect } from 'react';
import axios from 'axios';
import GameForm from './components/GameForm';
import GameList from './components/GameList';
import './styles.css';

const apiUrl = 'http://localhost:8080/games';

function App() {
  const [games, setGames] = useState([]);  

  const loadGames = async () => {
    try {
      const res = await axios.get(apiUrl);
      setGames(res.data);
    } catch (error) {
      console.error('Ошибка при загрузке игр:', error);
    }
  };

  useEffect(() => {
    loadGames();
  }, []);

  const addGame = async (gameData) => {
    try {
      const res = await axios.post(apiUrl, gameData); 
      const newGame = res.data; 
      setGames(prevGames => [...prevGames, newGame]); 

    } catch (error) {
      console.error('Ошибка при добавлении игры:', error);
    }
  };

  const changeStatus = async (id, newStatus) => {
    try {
      await axios.post(`${apiUrl}/${id}/status?status=${newStatus}`);
      setGames(prevGames => 
        prevGames.map(game =>
          game.id === id ? { ...game, status: newStatus } : game
        )
      );
    } catch (error) {
      console.error('Ошибка при изменении статуса:', error);
    }
  };

  const deleteGame = async (id) => {
    try {
      await axios.post(`${apiUrl}/${id}`);
      setGames(prevGames => prevGames.filter(game => game.id !== id)); 
    } catch (error) {
      console.error('Ошибка при удалении:', error);
    }
  };

  return (
    <div className="container">
      <h1>Коллекция игр</h1>
      <GameForm onSubmit={addGame} />
      <h2>Сейчас играется</h2>
      <GameList
        games={games.filter((game) => game.status === 'NOW_PLAYING')}
        onChangeStatus={changeStatus}
        onDelete={deleteGame}
      />
      <h2>В коллекции</h2>
      <GameList
        games={games.filter((game) => game.status === 'IN_COLLECTION')}
        onChangeStatus={changeStatus}
        onDelete={deleteGame}
      />
      <h2>Архив</h2>
      <GameList
        games={games.filter((game) => game.status === 'ARCHIVED')}
        onChangeStatus={changeStatus}
        onDelete={deleteGame}
      />
    </div>
  );
}

export default App;