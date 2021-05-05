import {useEffect, useState} from "react";
import User from "../user/user";
import './usersStyle.css'


export default function Users() {
    let [users, setUsers] = useState([]);
    let [singleUser, setSingleUser] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            })
    }, []);

    const userInfo = (id) => {
        let findDataUser = users.find(value => value.id === id);
        setSingleUser(findDataUser);

    }

    return (
        <div className={'wrap'}>
            <div className={'allUsers'}>
                {
                    users.map(value => <User key={value.id} item={value} userInfo={userInfo}/>)
                }
            </div>

            <div className={'singleUserDetails'}>
                {
                    singleUser ? (<h2>{singleUser.id} {singleUser.name} {singleUser.email}</h2>) : (<div></div>)
                }
            </div>
        </div>
    );
}