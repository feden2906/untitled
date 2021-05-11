import './App.css';
import Users from "./users/users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import User_details from "./user_details/User_details";
import Posts from "./posts/Posts";


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
                    <Route exact={true} path={'/users/:id'} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <User_details userID={id}/>
                    }}/>

                    <Route exact={true} path={'/posts'} render={({match: {url}}) => <Posts url={url}/>}/>


                </Switch>

            </div>
        </Router>
    );
}

export default App;
