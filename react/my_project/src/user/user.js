import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function User({item, url}) {
    return (
        <div>
            <div>
                {item.id} {item.name} -
                <Link to={url + '/' + item.id}>user {item.id} details</Link>
                <hr/>
            </div>
        </div>
    );
}