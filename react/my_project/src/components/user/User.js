import {Link} from "react-router-dom";


export default function User({item, url}) {
    let path = url + '/' + item.id + '/posts';

    return (
        <div>
            {item.id} - {item.name}
            <div>
                <Link to={{pathname: path, state: item}}>
                    <button>user with post</button>
                </Link>
            </div>
        </div>
    );
}