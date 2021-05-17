export default function AddPost({item}) {
    return (
        <div>
            {`Post #${item.id} Send user #${item.userId}`}
            <br/>
            {item.title}
            <hr/>
        </div>
    );
}