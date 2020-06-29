import initData from './initData';
import { GET_PRODUCTS } from '../actions/itemActions'

const reducer = (state = initData, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.products
        default:
            return state
    }
}

export default reducer;