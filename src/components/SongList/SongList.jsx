import React from 'react';
import { RiThumbUpLine, RiThumbUpFill } from 'react-icons/ri';

const SongList = ({ songs, likedSongs, onLikeToggle }) => {
  return (
    <ul>
      {songs.map((song) => (
        <li key={song.id}>
          <img src={song.artist.picture_small} alt={song.title} />
          <span>{song.title} ({song.album.title})</span>
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
