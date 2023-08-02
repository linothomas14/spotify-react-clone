import React from 'react'
import albumCover from '../assets/img/cover-album.jpg'

const AlbumCard = ({ title }) => {
    return (
        <div className="flex w-80 h-20 rounded p-0  bg-slate-600">
            <img className='w-auto h-auto ' src={albumCover} alt="" />
            <h2 className='p-3 text-white self-center '>{title}</h2>
        </div>
    )
}

export default AlbumCard