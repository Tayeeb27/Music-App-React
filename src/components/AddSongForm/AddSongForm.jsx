import React, { useState } from 'react';

const AddSongForm = ({ onAddSong }) => {
  const [formData, setFormData] = useState({ name: '', releaseDate: '', coverArt: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSong(formData);
    setFormData({ name: '', releaseDate: '', coverArt: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Song Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="releaseDate"
        placeholder="Release Date"
        value={formData.releaseDate}
        onChange={handleChange}
      />
      <input
        type="text"
        name="coverArt"
        placeholder="Cover Art URL"
        value={formData.coverArt}
        onChange={handleChange}
      />
      <button type="submit">Add Song</button>
    </form>
  );
}
export default AddSongForm;
