import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Comment ({item, url}) {
return (
<div>
    <div>
        {item.id} {item.body}
        <Link to={url + '/' + item.id}>comment {item.id} details</Link>
        <hr/>
    </div>
</div>
);
}