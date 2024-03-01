import { CSSProperties } from 'react';
import allImages from '../Images';
import keyDownWrapper from '../../KeyDownWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { clickItem } from '../../state/Tracker';
import { itemCountSelector } from '../../selectors/Inventory';
import { InventoryItem } from '../../logic/Inventory';
import ItemLocationTooltip from '../ItemLocationTooltip';

type CounterItemProps = {
    images?: string[];
    itemName: InventoryItem;
    imgWidth: number;
    ignoreItemClass: boolean;
    styleProps?: CSSProperties;
    grid?: boolean;
    fontSize: number;
};

const CounterItem = (props: CounterItemProps) => {
    const {
        images,
        itemName,
        imgWidth,
        ignoreItemClass,
        grid,
        fontSize,
    } = props;

    const dispatch = useDispatch();

    const styleProps = props.styleProps || {};

    const handleClick = (e: React.UIEvent) => {
        if (e.type === 'contextmenu') {
            dispatch(clickItem({ item: itemName, take: true }));
            e.preventDefault();
        } else {
            dispatch(clickItem({ item: itemName, take: false }));
        }
    };

    const current = useSelector(itemCountSelector(itemName));

    let itemImages: string[];
    if (!images) {
        if (grid) {
            itemImages = allImages[`${itemName} Grid`];
        } else {
            itemImages = allImages[itemName];
        }
    } else {
        itemImages = images;
    }
    const image = current === 0 ? itemImages[0] : itemImages[1];
    styleProps.position = 'relative';
    styleProps.textAlign = 'center';
    const className = ignoreItemClass ? '' : 'item';

    return (
        <ItemLocationTooltip item={itemName}>
            <div
                className={`item-container ${className}`}
                style={styleProps}
                onClick={handleClick}
                onContextMenu={handleClick}
                onKeyDown={keyDownWrapper(handleClick)}
                role="button"
                tabIndex={0}
            >
                <img src={image} alt={itemName} width={imgWidth} />
                {current > 0 && (
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            background: 'grey',
                            width: '40%',
                            height: '60%',
                            fontSize,
                            pointerEvents: 'none',
                        }}
                    >
                        <p
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            {current}
                        </p>
                    </div>
                )}
            </div>
        </ItemLocationTooltip>);
};

export default CounterItem;
