import {useEffect, useState} from "react";


export default function UserWithPost(props) {
    let {match: {params: {id}}} = props;
    let [userWithPost, setUserWithPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(value => value.json())
            .then(value => {
                setUserWithPost(value)
            })
    }, [id])

    return (
        <div>
            {
                userWithPost && userWithPost.title
            }
        </div>
    );
}