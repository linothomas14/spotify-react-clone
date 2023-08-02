import React from 'react'
// import "../style2.css"
import songCover from "../assets/img/cover-album.jpg"

const SongCard = ({ title, singer }) => {
    return (
        <div className="flex flex-col items-center p-5 rounded-md bg-slate-900">
            <img className='h-36 w-36 bg-gray-500' src={songCover} alt="" />
            <h2 className="text-white">{title}</h2>
            <h2 className="text-white">{singer}</h2>
        </div>
    )
}

export default SongCard