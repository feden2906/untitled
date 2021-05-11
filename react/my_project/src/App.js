import './App.css';
import Users from "./users/users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
    return (
        <Router>
            <div>
                <div><Link to={'/users'}>to users</Link></div>
                <div><Link to={'/posts'}>to posts</Link></div>

                <Switch>
                    <Route exact={true} path={'/users'} render={(props) => {
                        console.log(props);
                        return <Users {...props}/>;
                    }}/>
                    <Route path={'/posts'} render={() => <h1>posts</h1>}/>
                    <Route exact={true} path={'/users/:id'} render={() => <div>XXX</div>}/>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
