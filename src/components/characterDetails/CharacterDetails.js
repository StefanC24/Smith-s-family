 import React from 'react'  
 import { useParams } from 'react-router-dom';
 import axios from 'axios';

 function CharacterDetails(){
    const {id} = useParams();
    const [characterDetails, setCharacterDetails] = React.useState()

    function fetchCharacters(){
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => setCharacterDetails(response.data))
    }
        React.useEffect(() => {
            fetchCharacters()
        });

    return(
        <div>
            <h1>Character Details</h1>
            <img src={characterDetails?.image} alt={characterDetails?.name}/>
            <p>{characterDetails?.name}</p> 
        </div>
    )
 }

 export default CharacterDetails;