export default function Car ({item}) {
    return (
        <div>
            {item.producer} -
            {item.model} -
            {item.color} -
            {item.year}
            <button onClick={}>delete</button>
        </div>
    )
}