import React from 'react'
import albumCover from '../assets/img/cover-album.jpg'

function CollectionCard({ title, owner }) {
    return (
        <div className="flex w-80 h-14 rounded p-0 my-2">
            <img className='w-auto h-auto rounded-md' src={albumCover} alt="" />

            <div className='flex flex-col px-4'>
                <h2 className=' text-md text-gray-200 font-bold '>{title}</h2>
                <div className='flex'>
                    <h2 className=' text-sm text-gray-400 font-bold self-center '>playlist</h2>
                    <span className='text-gray-400 font-bold text-xl  self-center px-3'> - </span>
                    <h2 className=' text-sm text-gray-400 font-bold self-center '>{owner}</h2>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard