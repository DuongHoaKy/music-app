// import { data } from 'autoprefixer';
import React, { useContext,useEffect,useState } from 'react'
import { Songs, StoreContext } from '../Context'

// import PlaylistsNew from './PlaylistsNew';

function ListSong(props, children) {
  const { handleSetSong, song, DataSongs} = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setIdSong(idSong);
    handleSetSong(idSong);
  }
  useEffect(() => {
    setIdSong(song.id);
  }, [song])

  const {state, dispatch} = useContext(StoreContext);
  const currentPlaylist = state.currentPlaylist;
  const songIds = Array.from(state.playlists[currentPlaylist]);
//   console.log(songIds)
  
//   const [hide, setHide] = useState();
//   const [datas, setDataSongs] = useState(DataSongs);
// //   const [datas, setDataSongs] = useState(songIds);
//   const [idMusic, setIdMusic] = useState(songIds);
// //   console.log(datas)
//   const [order, setOrder] = useState("ASC");
//   const chiso = datas.map((song) => song.id)
//   const sorting = (col) => {
//     if (order === "ASC") {
//         const sorted = [...datas].sort((a, b) => {
//         return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
//       }
//       );
      
//       setDataSongs(sorted);
//     //   setIdMusic(songIds)
//       setIdMusic(chiso)
//     //   console.log(songIds)
//       console.log(chiso)
//       setOrder("DSC");
//     }

//     if (order === "DSC") {
//       const sorted = [...datas].sort((a, b) => {
//         return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
//       }
//       );
//       setDataSongs(sorted);
//     //   setIdMusic(songIds)
//       setIdMusic(chiso)
//       console.log(chiso)
//       setOrder("ASC");
//     }
//   };
//   console.log(song);
//   console.log(songIds);
//   const playlistsNew = Object.keys(state.playlists).filter(
//     list => !['home', 'favorites'].includes(list)
//   )

//   console.log(playlistsNew);

  return (
    <div className="relative border-l-2 border-gray-400 col-span-2  overflow-y-scroll">
        <div className="text-white p-4 sticky top-0 bg-slate-700 text-center uppercase font-bold decoration-wavy">{currentPlaylist}</div>
        {songIds.length <= 0 ? (
            <p className="text-white p-4 font-medium">Chưa có bài hát nào</p>
        ): (
        <table className="table-auto w-full">
            <thead className="text-white h-12 bg-gray-800">
                <tr className="">
                    {/* <th className="w-[10%]">STT</th> */}
                    <th className="w-[10%]" />
                    <th className="text-left">
                        Tên bài hát
                        {/* {!hide && <i 
                            className="ml-[20px] fa fa-arrow-down cursor-pointer"
                            onClick={() => {
                                setHide(!hide)
                                sorting("name");
                            }}
                        ></i>}
                        {hide && <i 
                            className="ml-[20px] fa fa-arrow-up cursor-pointer"
                            onClick={() => {
                                setHide(!hide)
                                sorting("name");
                            }}
                        ></i>} */}
                    </th>
                    <th className="w-[25%] text-left">Tác giả</th>
                    <th className="w-[10%]"><i className="fa fa-download"></i></th>
                </tr>
            </thead>
            <tbody>
                {   
                    songIds.filter((id) => {
                        const { name } = state.DataSongs[id]
                        if(props.searchSong === "") { return id+1 }
                        else if(name.toLowerCase().includes(props.searchSong.toLowerCase())) {
                            return id+1
                        }
                    })
                    .map((id) => {
                        const { name, author, url} = state.DataSongs[id];
                        const isFavorite = state.playlists.favorites.has(id);
                        // const isASongInPlaylist = playlistsNew[0].has(id);
                        return (
                            <tr 
                                key={id}  
                                className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 hover:text-gray-300 cursor-pointer ${idSong === id && `bg-slate-600 text-teal-400`}`} 
                                
                            >
                                {/* <td className="text-center">
                                    {id+1}
                                </td> */}
                                <td className="text-center">
                                    {
                                        isFavorite ? (
                                            <i 
                                                className="fa fa-heart cursor-pointer"
                                                onClick={() => 
                                                    dispatch({type:'REMOVE_FAVORITE', songId:id})
                                                }
                                            ></i>
                                        ) : (
                                            <i 
                                                className="fa fa-heart-o cursor-pointer"
                                                onClick={() =>
                                                    dispatch({type:'ADD_FAVORITE', songId:id})
                                                }
                                            ></i>
                                        )
                                    }
                                </td>
                                <td onClick={() => handlePlaySong(id)}>{name}</td>
                                <td className="">{author}</td>
                                <td className="text-center">
                                    <a href={url}>
                                        <i className="fa fa-download"></i>
                                    </a>
                                </td>
                            </tr>
                        )})
                }
                
            </tbody>
        </table>
        )}
        {/* <PlaylistsNew /> */}
    </div>
  )
}

export default ListSong