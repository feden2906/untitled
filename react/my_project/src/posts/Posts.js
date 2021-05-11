import {useEffect, useState} from "react";
import Post from "../post/Post";
import {getPosts} from "../services/api";

export default function Posts({url}) {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]))
    }, [])
    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value} url={url}/>)
            }
        </div>
    );
}