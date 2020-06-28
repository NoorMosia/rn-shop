import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actions/wishlistActions';

const initialState = []


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST: return addToWishlistHandler(state, action);
        case REMOVE_FROM_WISHLIST: return removeFromWishlistHandler(state, action);
        default: return state;
    }
}

const addToWishlistHandler = (state, action) => {
    const itemIndex = state.findIndex(item => item.id === action.item.id)
    let newState = state;
    if (itemIndex < 0) {
        newState = [...newState, action.item]
    }

    return newState;
}


const removeFromWishlistHandler = (state, action) => {
    const newState = state.filter(item => item.id !== action.id)
    return newState;
}

export default reducer;