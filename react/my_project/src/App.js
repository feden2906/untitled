import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import UserWithPost from "./components/userWithPost/UserWithPost";
import Posts from "./components/posts/Posts";
import PostWithComments from "./components/postWithComments/PostWithComments";

export default function App() {
    return (
        <Router>
            <div>
                <div><Link to={'/users'}>to users</Link></div>
                <div><Link to={'/posts'}>to post</Link></div>

                <Switch>
                    <Route exact path={'/users'} render={(props) => {
                        return <Users {...props}/>
                    }}/>

                    <Route path={'/users/:id'} render={(props) => {
                        return <UserWithPost {...props}/>
                    }}/>

                    <Route exact path={'/posts'} render={(props) => {
                        return <Posts {...props}/>
                    }}/>

                    <Route path={'/posts/:id'} render={(props) => {
                        return <PostWithComments {...props}/>
                    }}/>

                </Switch>
            </div>
        </Router>
    );
}