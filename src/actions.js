/**
 * Created by Denis on 18.05.2017.
 */
export const ADD_ITEM = 'addItem';

export function addItem(item) {
    return {
        type: ADD_ITEM,
        item
    }
};