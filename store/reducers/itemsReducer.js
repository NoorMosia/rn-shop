import initData from './initData';

const reducer = (state = initData, action) => {
    switch (action.type) {
        case "food":
            return initData.filter(data => data.category === 'fast food')
        default:
            return state
    }
}

export default reducer;