import imagenRickMorty from './img/DreamShaper_v7_I_want_a_futuristic_style_with_the_background_o_0-removebg-preview (2).png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters,setCharacters]=useState(null);


  const reqapi=async()=>{
  const api = await fetch( 'https://rickandmortyapi.com/api/character');
  const characterApi = await api.json();
  console.log(characterApi);
  setCharacters(characterApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
           <Characters characters={characters} setCharacters={setCharacters}/>
        ):(<>
          <img src={imagenRickMorty} alt="Rick & Morty" className='img-home'/>
        <button onClick={reqapi}className='btn-search'>Buscar Personajes</button>
           </>  
        )}     
      </header>
    </div>
  );
}

export default App;
