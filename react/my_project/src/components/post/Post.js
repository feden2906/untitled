import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Post({item, url}) {
    return (
        <div>
            {item.id} - {item.title}
            <div>
                <Link to={url + '/' + item.id}>
                    <button>details</button>
                </Link></div>
        </div>
    );
}