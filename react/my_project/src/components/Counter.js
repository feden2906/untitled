import {useSelector, useDispatch} from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Component() {

    const Counter = () => {
        const counter = useSelector((state) => state.counter);
        const dispatch = useDispatch();
        return (
            <>
                <h2>Counter: {counter}</h2>
                <hr/>
                <button onClick={() => {
                    dispatch({type: "INC"})
                }}>INC</button>

                <button onClick={() => {
                    dispatch({type: "DEC"})
                }}>DEC</button>

                <button onClick={() => {
                    dispatch({type: "INC100"})
                }}>INC100</button>

                <button onClick={() => {
                    dispatch({type: "DEC100"})
                }}>DEC100</button>

                <button onClick={() => {
                    dispatch({type: "RESET"})
                }}>RESET</button>
            </>
        )
    }

    return (
        <div>

            <Counter/>

        </div>
    );
}