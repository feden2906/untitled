import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import  from "./App.css"


const Todo = () => {
    const todo = useSelector((state) => state.todo)
    const dispatch = useDispatch();
    const [value, setValue] = useState('')
    const [check, setCheck] = useState(null)
    return (
        <div className={wrap}>
            <h1>Todo List: {todo}</h1>
            <input type="text" name={'input'} value={value} placeholder={'Add something...'} onChange={({target: {value}}) => setValue(value)}/>
            <div>
                <h4>Market completed?</h4>
                <hr/>
                YES <input type="radio" name={'checkStatus'} value={true}
                       onChange={({target: {value}}) => setCheck(value)}/>
                <hr/>
                NO <input type="radio" name={'checkStatus'} value={false}
                       onChange={({target: {value}}) => setCheck(value)}/>
                <hr/>
            </div>
            <div>
                <button onClick={() => {
                    dispatch({type: "ADD_TO_LIST", payload: {input: value, checkStatus: check}})
                }}>ADD</button>
            </div>
        </div>
    )
}

export default function App() {
    return (
        <div>
            <Todo/>
        </div>
    );
}