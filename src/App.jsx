import React, { useState } from 'react';
import ArtistInfo from './components/ArtistInfo';
import SongList from './components/SongList';
import AddSongForm from './components/AddSongForm';
import ArtistDropdown from './components/ArtistDropdown';
import './App.css';

function App() {
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

  const [songs, setSongs] = useState([
    {
        id: 1,
        artistId: 1,
        name: 'Muse',
        releaseDate: '2023-01-01',
        coverArt: 'https://images.genius.com/8cd98b9c35b2d2e9109861a88f873634.1000x1000x1.png',
    },
    {
        id: 2,
        artistId: 1,
        name: 'Stop Calling',
        releaseDate: '2023-02-15',
        coverArt: 'https://images.genius.com/8cd98b9c35b2d2e9109861a88f873634.1000x1000x1.png',
    },
    {
        id: 3,
        artistId: 2,
        name: 'Freezing Summer',
        releaseDate: '2023-02-15',
        coverArt: 'https://grmdaily.com/wp-content/uploads/2022/09/wewantwraithsheartbrokechild.jpeg',
    },
    {
        id: 4,
        artistId: 2,
        name: 'Chanaynay',
        releaseDate: '2023-02-15',
        coverArt: 'https://m.media-amazon.com/images/I/51a0bjwWn+L._UXNaN_FMjpg_QL85_.jpg',
    },
    {
        id: 5,
        artistId: 3,
        name: 'Picky',
        releaseDate: '2023-02-15',
        coverArt: 'https://img.tmstor.es/nafesmallz/116563-83bfb60c898e8b53ac1d8f20dc7744cf.png',
    },
    {
        id: 6,
        artistId: 3,
        name: 'Rock Climbing',
        releaseDate: '2023-02-15',
        coverArt: 'https://img.tmstor.es/nafesmallz/116563-83bfb60c898e8b53ac1d8f20dc7744cf.png',
    },
  ]);

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
        songs={songs.filter((song) => song.artistId === selectedArtist)}
        likedSongs={likedSongs}
        onLikeToggle={handleLikeToggle}
      />
      <AddSongForm onAddSong={handleAddSong} />
    </>
  );
}

export default App;
