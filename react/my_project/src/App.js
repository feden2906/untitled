import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";
import UserDetails from "./components/userDetails/UserDetails";


export default function App() {
    return (
        <Router>
            <div>
                <div><Link to={'/users'}>to users</Link></div>
                <div><Link to={'/posts'}>to posts</Link></div>

                <Switch>
                    <Route exact path={'/users'} render={(props) => {
                        return <Users {...props}/>
                    }}/>

                    <Route path={'/users/:id'} component={UserDetails}/>

                    <Route exact path={'/posts'} render={(props) => {
                        return <Posts {...props}/>
                    }}/>

                </Switch>


            </div>
        </Router>
    );
}