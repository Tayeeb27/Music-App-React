import React from 'react';
import { RiThumbUpLine, RiThumbUpFill } from 'react-icons/ri';

const SongList = ({ songs, likedSongs, onLikeToggle }) => {
  return (
    <ul>
      {songs.map((song) => (
        <li key={song.id}>
          <img src={song.coverArt} alt={song.name} />
          <span>{song.name} ({song.releaseDate})</span>
          {likedSongs.includes(song.id) ? (
            <RiThumbUpFill onClick={() => onLikeToggle(song.id)} />
          ) : (
            <RiThumbUpLine onClick={() => onLikeToggle(song.id)} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default SongList;
