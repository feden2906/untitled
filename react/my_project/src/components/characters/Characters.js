import React, {useEffect, useState} from "react";
import {getCharacter} from "../services/api";
import Character from "../character/Character";
import CharacterDetails from "../characterDetails/CharacterDetails";
import {Route} from "react-router-dom";

export default function Characters({match: {url}}) {
    let [characters, setCharacters] = useState([]);
    useEffect(() => {
        getCharacter().then(value => setCharacters([...value.data]))
    }, [])

    return (
        <div>
            {
                characters.map(value => <Character key={value.id} item={value} url={url}/>)
            }

        </div>
    );
}