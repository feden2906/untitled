export default function Car ({item, deleteThisCar}) {
    return (
        <div>
            <h3>{item.id} - {item.producer} - {item.model}</h3>
            <h3>{item.color} - {item.year}</h3>
            <button onClick={deleteThisCar}>delete</button>
            <hr/>
        </div>
    )
}