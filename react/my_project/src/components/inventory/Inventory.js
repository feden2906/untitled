import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Inventory({item, url}) {
    return (
        <div>
            {item.title} - {item.category} -
            <Link to={url + '/' +item.id}>details about {item.id}</Link>

        </div>
    );
}