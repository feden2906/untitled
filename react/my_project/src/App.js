import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Component from "./Component";


export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path={'/'}><Component/></Route>
                </Switch>
            </Router>
        </div>
    );
}