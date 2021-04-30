import Cars from "./components/cars/cars";
import {useState} from "react";


const cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    },
    {
        producer: "bmw",
        model: "320",
        year: 2012,
        color: "red",
        type: "sedan",
        engine: "f20",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];


function App() {

// Всім, привіт, додатково до дз зробіть по counter кнопки - increment, decrement, reset(тобто коли натискаєте
// на кнопко то counter = 0), а також кнопки increment + 100, decrement - 100

    let [counter, setCounter] = useState(0);
    const increment = () => setCounter(++counter);
    const decrement = () => setCounter(--counter);
    const reset = () => setCounter(counter = 0);
    const increment100 = () => setCounter(counter + 100);
    const decrement100 = () => setCounter(counter - 100);


    let [car, setCar] = useState(cars);
    const deleteCar = () => {
        car.pop();
        setCar([...car]);
    };

    return (
        <div>
            <div>
                counter is {counter}
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={reset}>reset</button>
                <button onClick={increment100}>increment100</button>
                <button onClick={decrement100}>decrement100</button>
            </div>

            <div>
                {
                    car.map((value, index) =>
                        <Cars key={index}
                              {...value}
                        />
                    )
                }

                <hr/>
                <button onClick={deleteCar}>delete last car from list</button>
            </div>
        </div>
    );
}

export default App;
