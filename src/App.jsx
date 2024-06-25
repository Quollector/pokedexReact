import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Card from './components/Card'
import loader from "./assets/loader.svg"
import Header from './components/Header'
import bg from "./assets/bg_pattern.jpg"

function App() {
  const [pokeList, setPokeList] = useState(null) 

  useEffect(() => {
    fetch("https://tyradex.tech/api/v1/pokemon")
    .then(response => {
      return response.json();
    })
    .then(rawDatas =>{
      setPokeList(rawDatas)
    })
    .catch(err => {console.log(err.message)})
  }, [])
  
  return (   
    <main className="bg-slate-900 min-h-screen py-8 px-10 relative">

      {/* BG */}
      <div className={`bg-[url('/src/assets/bg_pattern.jpg')] w-full h-full absolute z-10 top-0 left-0 opacity-70`}></div>

      <Header />

      {(!pokeList) && (
        <div className="loader fixed bg-slate-50 flex items-center justify-center w-full h-full top-0 left-0 z-200">
          <img src={loader} alt="" />
        </div>
      )}

      {(pokeList) && (
        <ul className='grid grid-cols-1 gap-5 relative z-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pt-[120px]'>
          {pokeList.map(item => (
            item.pokedex_id != 0 &&
            <Card key={nanoid()} datas={item} list={pokeList} />
          ))}
        </ul>
      )}
    </main>
  )
}

export default App
