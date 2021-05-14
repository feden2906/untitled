import {useEffect, useState} from "react";
import {getCharacter} from "../services/api";


export default function CharacterDetails(props) {
    let {match: {params: {id}}} = props;
    let [characterWithDetails, setCharacterWithDetails] = useState(null);

    useEffect(() => {
        getCharacter().then(value => setCharacterWithDetails([...value.data]))
    }, [id])


    return (
        <div>
            {characterWithDetails && JSON.stringify(characterWithDetails)}
        </div>
    )
}