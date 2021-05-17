import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import UserWithPost from "./components/userWithPost/UserWithPost";

export default function App() {
    return (
        <Router>
            <div>
                <div><Link to={'/users'}>to users</Link></div>

                <Switch>
                    <Route exact path={'/users'} render={(props) => {
                        return <Users {...props}/>
                    }}/>

                    <Route path={'/users/:id'} render={(props) => {
                        return <UserWithPost {...props}/>
                    }}/>
                </Switch>
            </div>
        </Router>
    );
}