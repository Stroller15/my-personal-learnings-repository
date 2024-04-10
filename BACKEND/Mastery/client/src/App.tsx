import { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css'

interface Joke {
  id: number;
  author: string;
  joke: string;
}

function App() {
const [jokes, setJokes] = useState<Joke[]>([]);

useEffect(() => {

  axios.get("/api/jokes")
  .then((response) => setJokes(response.data))
  .catch((err) => console.log(err))
  .finally(() => console.log('mauj kro'))

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:4000/jokes');
  //     const data: Joke[] = await response.json();
  //     // console.log(data)
  //     // console.log(jokes)
  //     setJokes(data);
  //   } catch (error) {
  //     console.log(error)
  //   }
    
  // }

  // fetchData();
},[])

console.log(jokes)

  return (
    <>
      <h1>Fetch Jokes Data</h1>
      {
        jokes.map((joke) => (
          <div id={String(joke.id)}>
            <p>{joke.author}</p>
            <p>{joke.joke}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
