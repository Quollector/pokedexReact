import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Card from './components/Card'

function App() {
  const [datas, setDatas] = useState(null)  

  useEffect(() => {
    fetch("https://tyradex.tech/api/v1/pokemon")
    .then(response => {
      return response.json();
    })
    .then(rawDatas =>{
      setDatas(rawDatas)
    })
    .catch(err => {console.log(err.message)})
  }, [])

  
  return (   
    <main className="bg-slate-50 min-h-screen py-8 px-10">
      {datas && (
        <ul className='grid grid-cols-5 gap-5'>
          {datas.map(item => (
            item.pokedex_id != 0 &&
            <Card key={nanoid()} datas={item} />
          ))}
        </ul>
      )}
    </main>
  )
}

export default App
