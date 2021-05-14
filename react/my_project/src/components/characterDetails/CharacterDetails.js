import {useEffect, useState} from "react";
import {getOneCharacter} from "../services/api";


export default function CharacterDetails(props) {
    const {match: {params: {id}}} = props;
    const [characterWithDetails, setCharacterWithDetails] = useState(null);

    useEffect(() => {
        getOneCharacter(id).then(value => setCharacterWithDetails(value.data))
    }, [])


    return (
        <div>
            {characterWithDetails && JSON.stringify(characterWithDetails)}
        </div>
    )
}