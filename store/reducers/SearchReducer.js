import { SEARCH } from '../actions/searchActions';
import initData from './initData';

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            const foundData = initData.filter(item => {
                if (item.title.includes(action.term)) {
                    return item
                }
            })

            return foundData
        default:
            return state
    }
}

export default reducer;
