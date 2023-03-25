import React from 'react';
import axios from 'axios'
import CharacterCard from '../CharacterCard'
import './CharacterList.css'

function CharacterList() {
  
  const [characters, setCharacter] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState(1)

  React.useEffect(() =>{
    fetchCharacters(1)
  }, [])

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
  
        <div className='cards-container'>
          {characters.map(character=>(
            <CharacterCard 
              {...character}
            />
          ))}     
        </div>

      <div className='navButtons'>  
        <button className='previousButton' onClick={() => changePage(currentPage, 'previous')}>Previous page</button>
        <button className='nextButton' onClick={() => changePage(currentPage, 'next')}>Next page</button>
      </div>

    </div>
  );
}

export default CharacterList;
