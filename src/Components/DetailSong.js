import React, { useContext } from 'react'
import { Songs, StoreContext } from '../Context'
// import { css, jsx } from '@emotion/core';
// import Modal from './Modal';
// import PlaylistsNew from './PlaylistsNew';
// import Toast from './Toast';

function DetailSong() {
  const {song} = useContext(Songs);
//   const [detailState , setState] = useState({
//     modal: false,
//     toast: ""
//   })
  const { state, dispatch } = useContext(StoreContext);
  
//   const playlistRef = useRef(null);
  const playlists = Object.keys(state.playlists);

//   const addPlaylist = (e) => {
//     e.preventDefault();
//     const list = playlistRef.current.value;

//     dispatch({ type:'ADD_PLAYLIST', playlist:list });

//     setState({
//         ...detailState,
//         modal: false,
//         toast: "Đã tạo thành công danh sách phát!"
//     })
//   }

//   const handleModal = () => setState({ ...detailState, modal: !detailState.modal})

  return (
    <div className="col-span-1 p-3">
        <div className="h-[400px] pb-5 border-b-2 border-gray-400">
            <h2 className="text-cyan-500 font-bold">Đang phát</h2>
            <h2 className="text-neutral-400 text-2xl pb-5">{song.name}</h2>
            <div className="flex ">
                <div className="w-[250px] h-[270px]">
                    <img 
                        className="w-full h-full"
                        src={song.links.images[0].url}
                        alt='avatar'
                    />
                </div>
                <div className="items-center ml-[60px] mt-[30px] flex flex-col">
                    <span className="text-neutral-300">Tác giả</span>
                    <span className="text-sm text-neutral-400">{song.author}</span>
                    <br/>
                    <div className="">
                        <img 
                            className="author w-[100px] rounded-full"
                            src={song.links.images[1].url}
                            alt='avatar'
                        />
                    </div>
                </div>
            </div>
        </div>
        <ul className="playlist-music mt-2 w-[488px] h-[230px] pt-[20px]">
            <li className="libary">Thư viện</li>
            {playlists.map(list => (
                <li 
                    key={list}
                    className={list === state.currentPlaylist ? 'active' : ''}
                    onClick={() => {
                        dispatch({ type: 'SET_PLAYLIST', playlist:list })
                    }}
                >
                    {list}
                </li>
            ))}
            {/* <li 
                className="new-playlist absolute left-1 bottom-[100px]"
                onClick={() => {
                    setState({...state, modal:true})
                }}
            >
                <i className="fa fa-plus-circle mr-1 translate-y-px text-base"></i>
                <span className="">Tạo danh sách mới</span>
            </li> */}
                
            {/* <Modal 
                show={detailState.modal} 
                close={handleModal}>
                <form onSubmit={addPlaylist}>
                    <div className="m-0 mb-7">Tên danh sách</div>
                    <div className="m-auto max-w-[250px] text-center">
                        <input
                            className="mb-9 h-10 pl-2 text-base w-[100%] text-black rounded" 
                            type="text" placeholder="Nhập tên danh sách phát"
                            required
                            ref={playlistRef}
                        />
                        <br />
                        <button 
                            className="bg-[#2BCC6C] text-white py-[12.5px] px-[30px] rounded-3xl uppercase font-bold text-sm border-none cursor-pointer"
                            type="submit"
                        >
                            Tạo
                        </button>
                    </div>
                </form>
            </Modal>
            <Toast 
                toast={detailState.toast} 
                close={() => {
                    setState({...detailState, toast: ""})
                }}
            /> */}
        </ul>
    </div>
  )
}

export default DetailSong