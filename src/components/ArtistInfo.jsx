import React from 'react';

const ArtistInfo = ({ artist }) => {
  return (
    <>
      <h2>{artist.name}</h2>
      <p>{artist.musicType}</p>
      <p>{artist.introduction}</p>
    </>
  );
}

export default ArtistInfo;