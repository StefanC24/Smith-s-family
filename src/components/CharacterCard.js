import './CharacterCard.css';

function CharacterCard(props){
    return(
        <div className="CharacterCard">
            <img src={props.image} />
            <p>{props.name}</p>
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