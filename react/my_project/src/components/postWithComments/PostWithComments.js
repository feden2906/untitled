import {useEffect, useState} from "react";
import AddComments from "../addComments/AddComments";

export default function PostWithComments(props) {
    let {match: {params: {id}}} = props;
    let [postWithComments, setPostWithComments] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(value => value.json())
            .then(value => setPostWithComments(value))
    }, [id])

    return (
        <div>
            {
                postWithComments && postWithComments.map(item => <AddComments key={item.id} item={item}/>)
            }
        </div>
    );
}