import types from '../action/actionTypes'
export default (state = [
    {
        id: 0,
        title: 'apple',
        price: 888,
        amount: 1
    },
    {
        id: 1,
        title: 'orange',
        price: 999,
        amount: 2
    },
], action) => {
    switch (action.type) {
        case types.CART_INCREMENT:
            return state.map(v => {
                if (v.id === action.payload.id) {
                    v.amount += 1
                }
                return v
            })
        case types.CART_DECREMENT:
            return state.map(v => {
                if (v.id === action.payload.id) {
                    v.amount -= 1
                }
                return v
            })
        default:
            return state
    }
}