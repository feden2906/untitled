import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts({match: {url}}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value} url={url}/>)
            }

        </div>
    );
}