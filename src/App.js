import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  const fetchAllAnime = async()=>{
    setIsLoading(true)
    const result = await axios(
     'https://ghibliapi.herokuapp.com/films'
    )

    console.log(result.data)

    setItems(result.data)
    setIsLoading(false)
  }
  const fetchItemsbyQuery = async () => {
    setIsLoading(true)
    const result = await axios(
      `https://ghibliapi.herokuapp.com/films?title=${query}`
    )

    console.log(result.data)

    setItems(result.data)
    setIsLoading(false)
  }
  useEffect(() => {
   fetchAllAnime();

  }, [])

  useEffect(() => {
 
    if(query===''){
    fetchAllAnime();
    }else{
      fetchItemsbyQuery()
    }

  }, [query])


  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App;
