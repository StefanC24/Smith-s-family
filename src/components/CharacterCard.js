import './CharacterCard.css';
import { Link } from 'react-router-dom';

function CharacterCard(props){
    return(
        <Link className="character-card" to={`/characters/${props.id}`}>
            <div className="character-card">
                <img className='card-image' src={props.image} alt={props.name}/>
                <p id='name'>{props.name}</p>
            </div>
        </Link>
    )
}

export default CharacterCard