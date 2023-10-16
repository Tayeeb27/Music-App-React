import React from 'react';

const ArtistDropdown = ({ artists, selectedArtist, onChange }) => {
  return (
    <select value={selectedArtist} onChange={(e) => onChange(e.target.value)}>
      {artists.map((artist) => (
        <option key={artist.id} value={artist.id}>
          {artist.name}
        </option>
      ))}
    </select>
  );
}

export default ArtistDropdown;
