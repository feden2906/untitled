export default function AddComments({item}) {
    return (
        <div>
            {`Comment #${item.id} Send post #${item.postId}`}
            <br/>
            {item.body}
            <hr/>
        </div>
    );
}