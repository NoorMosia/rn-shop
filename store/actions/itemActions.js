export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';
export const GET_PRODUCTS = 'GET_PRODUCTS';


export const getItems = () => {
    return async dispatch => {
        // any async code you want!
        try {
            const response = await fetch(
                'http://localhost:8080/'
            );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            let loadedProducts = [];
            console.log(resData.products[0]._id)

            loadedProducts = resData.products.map(item => {
                return {
                    title: item.name,
                    price: item.price,
                    imageUrl: ''
                }
            })

            dispatch({ type: GET_PRODUCTS, products: loadedProducts });
        } catch (err) {
            // send to custom analytics server
            console.log(err);

        }
    };
};

export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mealId: id };
};

export const setFilters = filterSettings => {
    return { type: SET_FILTERS, filters: filterSettings };
};