import React from 'react';
import axios from 'axios'
import CharacterCard from './components/CharacterCard';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [characters, setCharacter] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState(1)

  const fetchCharacters = (currentPageNumber) =>{
    axios.get(`https://rickandmortyapi.com/api/character?page=${currentPageNumber}`)
    .then(response => 
      setCharacter(response.data.results))
      setCurrentPage(currentPageNumber)
  }

  const changePage = (currentPageNumber, direction) =>{
    if(currentPageNumber === 1 && direction === 'previous'){
      return
    }
    else if( currentPageNumber === 42 && direction === 'next'){
      return
    }

    if(direction === 'previous'){
      fetchCharacters(currentPageNumber - 1)
    }
    else if(direction === 'next'){
      fetchCharacters(currentPageNumber + 1)
    }
  }

  return (
    <div className="App">

      <NavBar />
      <div className='nav-buttons'>  
        <button onClick={() => changePage(currentPage, 'previous')}>Previous page</button>
        <button onClick={() => fetchCharacters(1)}>Click to import first characters</button>
        <button onClick={() => changePage(currentPage, 'next')}>Next page</button>
      </div>
        <div className='cards-container'>
          {characters.map(character=>(
            <CharacterCard 
              name={character.name}
              image={character.image}
            />
          ))}     
        </div>

    </div>
  );
}

export default App;
