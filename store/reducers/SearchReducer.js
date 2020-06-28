import { SEARCH } from '../actions/searchActions';
// import initData from './initData';

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return state
        default:
            return state
    }
}

export default reducer;
