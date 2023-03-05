import CharacterCard from './components/CharacterCard';
import './App.css';

function App() {
  return (
    <div className="App">
       <CharacterCard name="Morty Smith" image="https://rickandmortyapi.com/api/character/avatar/2.jpeg" species="human" />
       <CharacterCard name="Summer Smith" image="https://rickandmortyapi.com/api/character/avatar/3.jpeg" species="human" />
       <CharacterCard name="Beth Smith" image="https://rickandmortyapi.com/api/character/avatar/4.jpeg" species="human" />
     </div>
  );
}

export default App;
