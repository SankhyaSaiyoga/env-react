import logo from './logo.svg';
import './App.css';
import Select from 'react-select'
import { useEffect } from 'react';


function App() {
  
  const getBarries = async () => {

    const barries = await fetch("https://pokeapi.co/api/v2/berry/")
    const value = await barries.json()
    console.log(value)
  }

  useEffect(() => {
    getBarries()
  }, [])
  
  return (
        <div className='App'>
          <h1>Halo Gaes</h1>
        </div>
  );
}

export default App;
