import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
    const { counter } = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={() => {
                dispatch({type: "INC"})
            }}>INC
            </button>

            <button onClick={() => {
                dispatch({type: "DEC"})
            }}>DEC
            </button>

            <button onClick={() => {
                dispatch({type: "INC100"})
            }}>INC100
            </button>

            <button onClick={() => {
                dispatch({type: "DEC100"})
            }}>DEC100
            </button>

            <button onClick={() => {
                dispatch({type: "RESET"})
            }}>RESET
            </button>
        </>
    )
}

export default Counter;
