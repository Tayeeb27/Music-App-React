import React, { useState, useEffect } from 'react';
import { ArtistInfo, SongList, AddSongForm, ArtistDropdown } from './components';
import './App.css';

export default function App() {
  const [likedSongs, setLikedSongs] = useState([]);
  const [artists, setArtists] = useState([
    {
      id: 1,
      name: 'M Huncho',
      musicType: 'Rap',
      introduction: 'The GOAT',
    },
    {
      id: 2,
      name: 'WeWantWraiths',
      musicType: 'Rap',
      introduction: 'The GOAT',
    },
    {
      id: 3,
      name: 'Nafe Smallz',
      musicType: 'Rap',
      introduction: 'The GOAT',
    },
  ]);

  const [songs, setSongs] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(1);

  const handleLikeToggle = (songId) => {
    if (likedSongs.includes(songId)) {
      setLikedSongs(likedSongs.filter((id) => id !== songId));
    } else {
      setLikedSongs([...likedSongs, songId]);
    }
  };

  const handleAddSong = (song) => {
    setSongs((prevSongs) => [
      ...prevSongs,
      { id: prevSongs.length + 1, artistId: selectedArtist, ...song },
    ]);
  };

  useEffect(() => {
    const artistName = artists[selectedArtist - 1].name;
    const deezerAPIEndpoint = `https://api.deezer.com/search/track?q=${artistName}&order=ranking&limit=5`;
  
    const script = document.createElement('script');
    script.src = `${deezerAPIEndpoint}&output=jsonp&callback=handleDeezerResponse`;
    document.head.appendChild(script);
  
    // Define a callback function to handle the Deezer API response
    window.handleDeezerResponse = (response) => {
      // Process the response and set the songs state
      setSongs(response.data);
      // Clean up the script tag
      document.head.removeChild(script);
    };
  
    return () => {
      // Clean up the callback function
      delete window.handleDeezerResponse;
    };
  }, [selectedArtist, artists]);
  

  return (
    <>
      <h1>My Music App</h1>
      <ArtistDropdown
        artists={artists}
        selectedArtist={selectedArtist}
        onChange={(artistId) => setSelectedArtist(parseInt(artistId))}
      />
      <ArtistInfo artist={artists.find((artist) => artist.id === selectedArtist)} />
      <SongList
        songs={songs}
        likedSongs={likedSongs}
        onLikeToggle={handleLikeToggle}
      />
      <AddSongForm onAddSong={handleAddSong} />
    </>
  );
}
