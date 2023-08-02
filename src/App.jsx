
import './App.css';
import SongCard from './components/SongCard';
import AlbumCard from './components/AlbumCard';
import Aside from './components/Aside';
import profilePic from './assets/img/profile-pic.jpg'
// import FamilyList from './components/family';

function App() {


  return (
    <div className='flex min-h-screen'>
      <aside>
        <Aside />
      </aside>
      <main className="bg-slate-950  ">
        <div className=" bg-gradient-to-b from-[#003242] p-5 my-2 rounded-md">
          <div className='flex pb-4 gap-2 justify-end '>
            <button className="bg-white px-4 py-1 rounded-full" >Jelajahi Premium</button>
            <button className='bg-gray-900 text-white px-4 py-1 rounded-full'>Pasang Aplikasi</button>
            <img src={profilePic} className='w-7 h-7 rounded-full' alt="" />
          </div>
          <h1 className="text-white text-3xl font-bold">Selamat malam</h1>
          <div className="flex ">
            <div className="flex h-min-24 p-4 flex-wrap gap-5 rounded-md">
              <AlbumCard title="Album 1" />
              <AlbumCard title="Album 1" />
              <AlbumCard title="Album 1" />
              <AlbumCard title="Album 1" />
              <AlbumCard title="Album 1" />
              <AlbumCard title="Album 1" />
              <AlbumCard title="Album 1" />
              <AlbumCard title="Album 1" />

            </div>
          </div>
        </div>
        <div className="flex flex-col p-5">
          <h1 className="text-white text-3xl font-bold">Hit terpopuler hari ini</h1>
          <div className="flex flex-wrap gap-3">
            <SongCard title="Song 1" singer="Singer 1" />
            <SongCard title="Song 1" singer="Singer 1" />
            <SongCard title="Song 1" singer="Singer 1" />

          </div>
        </div>


      </main>
    </div>
  );
}

export default App;
