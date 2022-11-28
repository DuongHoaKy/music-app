import React from 'react'

function Navbar(props) {

  const searchSong = (e) => {
    props.handleSearchSong(e.target.value);
  }
  
  return (
    <div className="flex justify-between h-24 bg-slate-900 text-white text-center leading-[6rem] text-2xl px-4">
        <div className="ml-[150px]">
          <i className="fa fa-music"></i>
          <span className="m-3">Music-app</span>
        </div>
        <div className="h-[100%] mr-[400px]">
          <input 
              type="text" 
              placeholder="Tìm kiếm bài hát ..."
              className="shadow appearance-none border rounded w-[600px] h-12 py-4 px-5 text-gray-700 text-2xl leading-tight focus:outline-none focus:shadow-outline"
              onChange={event => searchSong(event)}
          />
        </div>
        {/* <div className="">
          <button className="pr-2">Đăng ký</button>
          <button>Đăng nhập</button>
        </div> */}
    </div>
  )
}

export default Navbar