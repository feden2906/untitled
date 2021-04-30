export default function Cars (props) {
    let {color, engine, model, power, producer, type, volume, year} = props;

    return (
        <div>
            <h1>{producer}</h1>
            <h2>{model}</h2>
            <h3>{year} - {type} - {color}</h3>
            <div>{engine} - {power} - {volume}</div>

        </div>
    )
}