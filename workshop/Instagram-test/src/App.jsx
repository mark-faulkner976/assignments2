import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  const [photos, setPhotos] = useState([])


  const options = {
    method: 'GET',
    url: 'https://instagram130.p.rapidapi.com/account-feed',
    params: {username: '365candidphotography'},
    headers: {
      'X-RapidAPI-Key': '27e10303e4mshebaef7684f815c9p181ef3jsn61fa14ad3166',
      'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
    }
  };

  const getFeed = async () => {
    try {
      const response = await axios.request(options);
      setPhotos(response.data);
      for (let i; photos.length; i++ ){
        console.log(photos[i])
      }
    } catch (error) {
      console.error(error);
    }
  }

  getFeed();

  const photoList = photos.map(prev => <h1>{prev.node.id}</h1> )

  return (
    <>
      <div> 
        {photoList}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
