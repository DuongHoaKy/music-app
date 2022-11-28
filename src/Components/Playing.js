import React from 'react'
import  AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { Songs } from '../Context'
import { useContext } from 'react'

function Playing() {
  const {song, handleSetSong} = useContext(Songs);
  // const {state, dispatch} = useContext(StoreContext);
  // const currentPlaylist = state.currentPlaylist;
  // const songIds = Array.from(state.playlists[currentPlaylist])
  // const isFavorite = state.playlists.favorite.has(songIds);
  // console.log(isFavorite)
  const handleClickNext = () => {
    handleSetSong(song.id + 1)
  }
  const handleClickPre = () => {
    handleSetSong(song.id - 1)
  }
  return (
    <div>
        <AudioPlayer 
            className="player-music"
            src={song.url} 
            layout="stacked-reverse" 
            showSkipControls={true} 
            showJumpControls={false}
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPre}
        />
    </div>
  )
}

export default Playing