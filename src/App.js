import CharacterCard from './components/CharacterCard';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='cards-container'>
        <CharacterCard 
        img='https://rickandmortyapi.com/api/character/avatar/2.jpeg' 
        name='Morty Smith' 
        species='human'/>
        <CharacterCard 
        img='https://rickandmortyapi.com/api/character/avatar/3.jpeg' 
        name='Summer Smith' 
        species='human'/>
        <CharacterCard 
        img='https://rickandmortyapi.com/api/character/avatar/4.jpeg' 
        name='Emma Smith' 
        species='human'/> 
      </div> 
    </div>

  );
}

export default App;
