import React from "react";
import './App.css';
import Posts from "./posts/posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./users/users";


function App() {
    return (
        <div>
            <Router>

                <Link to={'/posts'}><h2>to Posts</h2></Link>
                <Link to={'/users'}><h2>to Users</h2></Link>

                <Switch>
                    <Route path={'/posts'} render={() => (<Posts/>)}/>
                    <Route path={'/users'} render={() => (<Users/>)}/>
                </Switch>

            </Router>

            <Posts/>

            <Users/>

        </div>
    );
}

export default App;
