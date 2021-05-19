import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Component from "./components/Counter";

export default function App() {
    return (
        <div>
            <Router>
                <Link to={'./components/Counter'}>to Counter</Link>

                <Switch>

                    <Route exact path={'./components/Counter'} render={() => {
                        <Component/>
                    }}/>
                </Switch>

            </Router>
        </div>
    );
}