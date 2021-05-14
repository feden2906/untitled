import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Character({item, url}) {
    return (
        <div>
            {item.name} - {item.born} -
            <Link to={url + '/' + item.id}>details about {item.id}</Link>

        </div>
    );
}