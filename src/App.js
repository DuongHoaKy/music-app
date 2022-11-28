//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import DetailSong from './Components/DetailSong';
import ListSong from './Components/ListSong';
import { Songs, StoreContext } from './Context';
import DataSongs from './data/songs.json';
import Playing from './Components/Playing';
import { useState, useReducer} from 'react';

const DEFAULT_PLAYLIST = "home";
// const YEU_THICH = "yêu thích";

const initialState = {
  currentPlaylist: DEFAULT_PLAYLIST,
  DataSongs,
  playlists: {
    home: new Set(DataSongs.map((song) => {
      return song.id
    })),
    favorites: new Set(),
    // playlistsNew : Object.keys(initialState.playlists).filter(
    //   list => !['home', 'favorites'].includes(list)
    // )
  }
}

// const playlistsNew = Object.keys(initialState.playlists).filter(
//   list => !['home', 'favorites'].includes(list)
// )

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_PLAYLIST':
      return { 
        ...state, 
        playlists: {...state.playlists, [action.playlist]: new Set() }
      }
    case 'SET_PLAYLIST':
      return { ...state, currentPlaylist: action.playlist }
    case 'ADD_FAVORITE':
      state.playlists.favorites.add(action.songId)
      return {...state}
    case 'REMOVE_FAVORITE':
      state.playlists.favorites.delete(action.songId)
      return {...state}
    // case 'ADD_MUSIC_TO_PLAYLIST':
    //   state.playlists.playlistsNew.add(action.songId)
    //   return {...state}
    default:
      throw new Error("Invalid action")
  }
  return state
}

function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong);
    if(!song)
      setSong(DataSongs[0]);
    else
      setSong(song);
  }
  const [searchSong, setSearchSong] = useState('');
  const handleSearchSong = (searchSong) => {
    setSearchSong(searchSong);
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <StoreContext.Provider value={{state, dispatch}}>
          <Navbar handleSearchSong={handleSearchSong}/>
          <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
            <DetailSong />
            <ListSong searchSong={searchSong}/>
          </div>
          <Playing />
        </StoreContext.Provider>
      </Songs.Provider>
    </div>
  );
}

export default App;
