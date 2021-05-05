import {useEffect, useState} from "react";
import Post from "../post/post";
import './postsStyle.css'


export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [singlePost, setSinglePost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value])
            })
    }, []);

    const postInfo = (id) => {
        let findData = posts.find(value => value.id === id);
        setSinglePost(findData);

    }

    return (
        <div className={'wrap'}>
            <div className={'allPosts'}>
                {
                    posts.map(value => <Post key={value.id} item={value} postInfo={postInfo}/>)
                }
            </div>

            <div className={'singlePostDetails'}>
                {
                    singlePost ? (<h2>{singlePost.id} {singlePost.title}</h2>) : (<div></div>)
                }
            </div>
        </div>
    );
}