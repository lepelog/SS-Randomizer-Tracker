import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../state/Store';
import { currySelector } from '../utils/Redux';
import { InventoryItem } from '../logic/Inventory';

const itemHintsSelector = (state: RootState) => state.tracker.checkHints;

export const itemLocationsSelector = currySelector(
    createSelector(
        [
            itemHintsSelector,
            (_state: RootState, item: InventoryItem) => item,
        ],
        (itemHints, item: InventoryItem) => Object.entries(itemHints).filter(([_location, hintedItem]) => hintedItem === item).map(([location, _item]) => location),
    ),
);
