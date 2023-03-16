import './CharacterCard.css';

function CharacterCard(props){
    return(
        <div className="CharacterCard">
            <img className='card-image' src={props.image} alt={props.name}/>
            <p id='name'>{props.name}</p>
        </div>
    )
}

export default CharacterCard