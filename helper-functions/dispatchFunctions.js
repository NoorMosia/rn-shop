import { useDispatch, useSelector } from 'react-redux';
import { search } from '../store/actions/searchActions';

const dispatch = useDispatch();

export const addToCartHandler = item => {
    dispatch(addToCart(item))
}

export const addToWishlistHandler = item => {
    dispatch(addToWishlist(item))
}

export const searchHandler = term => {
    dispatch(search(term))
}