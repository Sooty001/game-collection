import { useState } from 'react';

function GameForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    store: '',
    developer: '',
    releaseDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', genre: '', store: '', developer: '', releaseDate: '' });
  };

  return (
    <form id="gameForm" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          name="title"
          className="form-input"
          placeholder="Название"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="genre"
          className="form-input"
          placeholder="Жанр"
          value={formData.genre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="store"
          className="form-input"
          placeholder="Магазин"
          value={formData.store}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="developer"
          className="form-input"
          placeholder="Разработчик"
          value={formData.developer}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="releaseDate"
          className="form-input"
          placeholder="Дата релиза (ДД-ММ-ГГГГ)"
          value={formData.releaseDate}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn-add">Добавить игру</button>
    </form>
  );
}

export default GameForm;