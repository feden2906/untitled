import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    setComments,
    setCommentsError,
    setCommentsIsLoading,
    usePostsFetcher,
    usePostsSetError,
    usePostsSetLoading
} from './redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Comments = () => {
    const {isLoading, comments, error} = useSelector(({comments}) => {
        return comments
    });
    const dispatch = useDispatch();
    const fetchComments = async () => {
        try {
            dispatch(setCommentsIsLoading())
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const payload = await response.json();
            dispatch(setComments(payload))
        } catch (e) {
            dispatch(setCommentsError('???'))
        }
    }
    React.useEffect(() => {
        fetchComments();
    }, [])

    if (error) {
        return (
            <h1>{error}</h1>
        )
    }
    if (isLoading) {
        return (
            <h1>Loading!!!</h1>
        )
    }

    return (
        <div>
            {comments.map(comment => (
                <p key={comment.id}>
                    {comment.name} = {comment.email} = {comment.body}
                </p>
            ))}
        </div>
    );
}


const Posts = () => {
    const {isLoading, posts, error} = useSelector(({posts}) => {
        return posts
    });

    const postFetcher = usePostsFetcher();
    const postLoading = usePostsSetLoading();
    const postError = usePostsSetError();

    const fetchPosts = async () => {
        try {
            postLoading();
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const payload = await response.json();

            postFetcher(payload);
            // dispatch(setPosts(payload));
        } catch (e) {
            postError('Failed to fetch data');
        }
    }
    React.useEffect(() => {
        fetchPosts();
    }, [])

    if (error) {
        return (
            <h1>{error}</h1>
        )
    }
    if (isLoading) {
        return (
            <h1>Loading!!!</h1>
        )
    }

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
            <Router>
                <div><Link to={'/posts'}>to posts</Link></div>
                <div><Link to={'/comments'}>to comments</Link></div>
                <Switch>
                    <Route path={'/posts'}><Posts/></Route>
                    <Route path={'/comments'}><Comments/></Route>
                </Switch>
            </Router>
        </div>
    );
}
