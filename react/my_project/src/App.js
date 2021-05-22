import {Route} from "react-router-dom";
import Counter from "./Component";


export default function App() {
    return (
        <div>
           <Route path={'/'}><Counter/></Route>    {/* якщо один Route то в Switch можна не огортаати */}
        </div>
    );
}
