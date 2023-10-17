import React, { useState } from 'react';

const AddSongForm = ({ onAddSong }) => {
  const [formData, setFormData] = useState({
    title: '',
    album: {
      title: '',
    },
    artist: {
      picture_small: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const names = name.split('.'); // Split the name into an array
    let updatedData = { ...formData };
  
    // Traverse the nested object and update the value
    let currentData = updatedData;
    for (let i = 0; i < names.length - 1; i++) {
      currentData = currentData[names[i]];
    }
  
    currentData[names[names.length - 1]] = value;
    setFormData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSong(formData);
    setFormData({
       title: '', 
       album: {
        title: ''
      }, artist:{
        picture_small: '' 
      }});
  };

  return (
    <form onSubmit={handleSubmit}>
    <input
    type="text"
    name="title"
    placeholder="Song Name"
    value={formData.title}
    onChange={handleChange}
  />

  <input
    type="text"
    name="album.title"
    placeholder="Album Title"
    value={formData.album.title}
    onChange={handleChange}
  />

  <input
    type="text"
    name="artist.picture_small"
    placeholder="Cover Art URL"
    value={formData.artist.picture_small}
    onChange={handleChange}
  />

      <button type="submit">Add Song</button>
    </form>
  );
};

export default AddSongForm;
