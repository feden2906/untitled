import {Link} from "react-router-dom";

export default function Post({item, url}) {
    let path = url + '/' + item.id + '/comments';

    return (
        <div>
            {item.id} - {item.title}
            <div>
                <Link to={{pathname: path, state: item}}>
                    <button>post with comment</button>
                </Link>
            </div>
        </div>
    );
}