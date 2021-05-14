import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Characters from "./components/characters/Characters";
import React from "react";
import Inventorys from "./components/inventorys/Inventorys";
import CharacterDetails from "./components/characterDetails/CharacterDetails";

export default function App() {
    return (
        <Router>
            <div>
                <div><Link to={'/cast'}>to characters</Link></div>
                <div><Link to={'/inventory'}>to inventory</Link></div>
                <Switch>
                    <Route exact path={'/cast'} render={(props) => {
                        return <Characters {...props}/>
                    }}/>
                    <Route exact path={'/cast/:id'} component={CharacterDetails}/>

                    <Route exact={true} path={'/inventory'} render={(props) => {
                        return <Inventorys {...props}/>
                    }}/>


                </Switch>


            </div>
        </Router>
    );
}