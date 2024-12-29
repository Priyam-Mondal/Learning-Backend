import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';

function App() {
  
  const [jokes, setJokes] = useState([]);
  
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        console.log(response.data);
        setJokes(response.data);        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Chai and fullstack</h1>
      <p>Number of Jokes: {jokes.length}</p>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App