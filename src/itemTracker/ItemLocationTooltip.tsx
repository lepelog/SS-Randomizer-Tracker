import React from "react";
import { InventoryItem } from "../logic/Inventory";
import { useSelector } from "react-redux";
import { itemLocationsSelector } from "../selectors/Items";
import Tippy from "@tippyjs/react";


const ItemLocationTooltip = (props: {
    item: InventoryItem,
    children: React.ReactElement<any>
}) => {
    const itemLocations = useSelector(itemLocationsSelector(props.item));

    const locationsTooltip = (
        <>
            <div>Found at:</div>
            {itemLocations.map(loc => (<div key={loc}>{loc}</div>))}
        </>
    );

    if (itemLocations.length > 0) {
        return (
            <Tippy content={locationsTooltip}>
                {props.children}
            </Tippy >
        );
    } else {
        return props.children;
    }
};

export default ItemLocationTooltip;
