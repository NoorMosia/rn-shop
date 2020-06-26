export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_ITEM = 'INCREMENT_ITEM';
export const DECREMENT_ITEM = 'DECREMENT_ITEM';

export const addToCart = item => {
    return {
        type: ADD_TO_CART,
        item: item
    }
}
export const removeFromCart = id => {
    return {
        type: REMOVE_FROM_CART,
        id: id
    }
}
export const incrementItem = id => {
    return {
        type: INCREMENT_ITEM,
        id: id
    }
}
export const decrementItem = id => {
    return {
        type: DECREMENT_ITEM,
        id: id
    }
}