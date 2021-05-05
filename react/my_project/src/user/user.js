export default function User({item, userInfo}) {
    return (
        <div>
            <div>
                <h3>Id: {item.id}</h3>
                <h4>Name: {item.name}</h4>
                <h4>Email: {item.email}</h4>
                <hr/>
                <button onClick={() => userInfo(item.id)}>details</button>
                <hr/>
            </div>
        </div>
    );
}