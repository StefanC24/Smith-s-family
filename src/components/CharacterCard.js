import './CharacterCard.css';

function CharacterCard(props){
    return(
        <div className="CharacterCard">
            <img src={props.img} alt={props.name}/>
            <p id='name'>{props.name}</p>
            <details>
                <summary>Details</summary>
                <ul>
                    <li>species: {props.species}</li>
                </ul>
            </details>
        </div>
    )
}

export default CharacterCard;