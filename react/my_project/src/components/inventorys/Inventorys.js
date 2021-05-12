import {useEffect, useState} from "react";
import {getInventory} from "../services/api";
import Inventory from "../inventory/Inventory";

export default function Inventorys({match: {url}}) {
    let [inventorys, setInventorys] = useState([]);
    useEffect(() => {
        getInventory().then(value => setInventorys([...value.data]))
    }, [])

    return (
        <div>
            {
                inventorys.map(value => <Inventory key={value.id} item={value} url={url}/>)
            }
        </div>
    );
}