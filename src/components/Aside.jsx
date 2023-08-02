import React from 'react'
import CollectionCard from './CollectionCard'
import HomeSearchSection from './HomeSearchSection'


const Aside = () => {
    return (
        <aside className="bg-gray-950 min-w-[430px] p-2 min-h-screen">
            <HomeSearchSection />
            <div className=" p-3 px-4 my-2 bg-gray-900 ">
                <div class="header-collection mb-5">
                    <h2 className="text-gray-200 text-lg my-4">Koleksi Kamu</h2>
                    <span className="bg-gray-600 text-gray-200 text-sm py-1 px-3 font-bold rounded-full">Playlist</span>
                </div>
                <div className="">
                    <CollectionCard title="Collection 1" owner="Owner 1" />
                    <CollectionCard title="Collection 1" owner="Owner 1" />
                    <CollectionCard title="Collection 1" owner="Owner 1" />
                    <CollectionCard title="Collection 1" owner="Owner 1" />
                    <CollectionCard title="Collection 1" owner="Owner 1" />
                    <CollectionCard title="Collection 1" owner="Owner 1" />
                </div>
            </div>
        </aside>)
}
export default Aside