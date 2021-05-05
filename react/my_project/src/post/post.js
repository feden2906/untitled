export default function Post({item, postInfo}) {
    return (
        <div>
            <div>
                <h3>Id: {item.id}</h3>
                <h4>Title: {item.title}</h4>
                <h4>Body: {item.body}</h4>
                <hr/>
                <button onClick={() => postInfo(item.id)}>details</button>
                <hr/>
            </div>
        </div>
    );
}