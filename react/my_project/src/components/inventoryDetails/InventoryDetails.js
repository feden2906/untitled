import {useEffect, useState} from "react";
import {getOneInventory} from "../services/api";

export default function InventoryDetails(props) {
    const {match: {params: {id}}} = props;
    const [inventoryWithDetails, setInventoryWithDetails] = useState(null);

    useEffect(() => {
        getOneInventory(id).then(value => setInventoryWithDetails(value.data))
    }, [])


    return (
        <div>
            {inventoryWithDetails && JSON.stringify(inventoryWithDetails)}
        </div>
    )
}