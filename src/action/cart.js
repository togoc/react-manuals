import types from './actionTypes'

export const increment = (id) => {
    return {
        type: types.CART_INCREMENT,
        payload: {
            id
        }
    }
}

export const decrement = (id) => {
    return {
        type: types.CART_DECREMENT,
        payload: {
            id
        }
    }
}

//异步 可以进行一些ajax请求
export const decrementAsyn = id => dispatch => {
    setTimeout(() => {
        dispatch(decrement(id))
    }, 2000);
}