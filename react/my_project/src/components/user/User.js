import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function User({item, url}) {

    let path = url + '/' + item.id;

    return (
        <div>
            {item.id} - {item.name}
            <div>
                <Link to={{pathname: path, state: item, search: "/posts?userId"}}>
                    <button>details</button>
                </Link>
            </div>
        </div>
    );
}