import './character.css';
function Character(props) {

    let cls = props.newCharacter === 'mars' ? 'mars-class' : 'saturn-class';
    return <div className={cls}>

        <h2>
            {props.newCharacter}
        </h2>

        <img src={props.image} alt=""/>


    </div>
}

export default Character;