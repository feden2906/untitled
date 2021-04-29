import './character.css';
function Character(props) {


    return <div>

        <h1>
            {props.newCharacter}
        </h1>

        <img src={props.image} alt=""/>

        <h3>
            {props.surface_area}
        </h3>

        <h4>
            {props.average_orbital_speed}
        </h4>


    </div>
}

export default Character;