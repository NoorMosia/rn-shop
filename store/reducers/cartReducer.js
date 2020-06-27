import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_ITEM,
    DECREMENT_ITEM
} from '../actions/cartActions';

const initialState = {
    items: [],
    totalAmount: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: return addToCartFunction(state, action)
        case REMOVE_FROM_CART: return removeFromCartFunction(state, action)
        case INCREMENT_ITEM: return incrementItemFunction(state, action)
        case DECREMENT_ITEM: return decrementItemFunction(state, action)
        default: return state;
    }
}

const addToCartFunction = (state, action) => {
    const foundItem = state.items.find(item => action.item.id === item.id)
    if (foundItem) {
        return state
    }
    state.items.push(action.item);
    const newItemsList = state.items.map(item => {
        return { ...item, quantity: 1 }
    })
    const newTotal = state.totalAmount + action.item.price;
    return { ...state, items: newItemsList, totalAmount: newTotal };
}

const removeFromCartFunction = (state, action) => {
    const oldItem = state.items.find(item => item.id === action.id)
    const newItems = state.items.filter(item => item.id !== action.id)
    const newTotal = state.totalAmount - oldItem.price * oldItem.quantity
    return { ...state, items: newItems, totalAmount: newTotal };
}

const incrementItemFunction = (state, action) => {
    let newAmount = state.totalAmount;
    const newItems = state.items.map(item => {
        if (item.id === action.id) {
            item.quantity++;
            newAmount += item.price;
        }
        return item;
    })
    return { ...state, items: newItems, totalAmount: newAmount };
}

const decrementItemFunction = (state, action) => {
    let newAmount = state.totalAmount;
    const newItems = state.items.map(item => {
        if (item.id === action.id && item.quantity > 1) {
            item.quantity--;
            newAmount -= item.price;
        }
        return item;
    })
    return { ...state, items: newItems, totalAmount: newAmount };
}

export default reducer;