import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

//components
import Favourite from './components/Favourite'

function App() {
  const [pokemon, setPokemon] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const [favourite , setFavourite] = useState([])

  const [id, setID] = useState(1)
  if(id < 1){
    setID(1)
  }


  useEffect(() => {
    
    let abortController = new AbortController()
    
    const loadPokemon = async () =>{
      
      try {
        setLoading(true)
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`,{
          sinal: abortController.signal
        })
        setPokemon(response.data)
        setError("")

      } catch (err) {
        setError("somting went wrong : "+ err)
      }

      finally {
        setLoading(false)
      }
    }
    loadPokemon()
    return abortController.abort()

  }, [id])

  // id
  const previous = () => {
       setID((id) => id - 1)
  }
  const next = () => {
       setID((id) => id + 1)
  }

  
const pokemonFavourite = () => {
  setFavourite((oldfavourite) => [...oldfavourite, pokemon])
}


//  console.log(pokemon)
//  console.log(`id: ${id}`)
//  console.log(favourite)
  return (
   <div className="block max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-00 text-center ">
       {loading ? (
        <h1>loading...</h1>
       ):(
        <div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">

              <div>
                <h1 className='font-black'>Name: {pokemon?.name}</h1>
                {/* <p>{pokemon?.weight}</p> */}

                <button onClick={pokemonFavourite} className='font-medium mt-5 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Add to favourite</button>
                <img src={pokemon?.sprites?.other?.home?.front_default} alt={pokemon?.name} />

                <ul className='list-none'>
                  
                  {pokemon?.abilities.map((abilities, idex) =>  (
                    <li className="mb-2 bg-gray-200 p-2 rounded" key={idex}> : dd{abilities.ability?.name}</li>
                  ))}
                </ul>
                {id !== 1 ?<div>
                   <button onClick={previous} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 '>previous</button>
                   <button onClick={next} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1'>next</button>
                </div>:<div>
                   <button onClick={next} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1'>next</button>
                </div>}
               
              </div>
                

                <div className="fav">
                  <h2 className='font-black'>Your Favourite Pokemon</h2>
                  {favourite.length > 0 ? <Favourite fav = {favourite}/> : <div className='flex h-full items-center justify-center'><p>No Pokemon Favourite</p></div>}
                  
                </div>
        </div>
        </div>
       )}
    </div>
    
    
  )
}

export default App
