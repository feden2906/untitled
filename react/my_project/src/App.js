import React from "react";
import {useSelector, useDispatch} from "react-redux";

const Posts = () => {
    const {isLoading, posts} = useSelector(({isLoading, posts}) => ({
        isLoading,
        posts
    }));
    const dispatch = useDispatch();
    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const payload = await response.json();

            dispatch({type: "SET_POSTS", payload})
        } catch (e) {
            console.log(e, 'stop');
        }
    }
    React.useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <div>
            {posts.map(post => (
                <p key={post.id}>
                    {post.title} = {post.body}
                </p>
            ))}
        </div>
    );
}

export default function App() {
    return (
        <div>
            <Posts/>
        </div>
    );
}