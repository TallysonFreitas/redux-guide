import CartActionTypes from "./action-type"

export const addProductToCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
})

export const removeProductFromCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload
})

export const addQuantity = (payload) => ({
    type: CartActionTypes.ADD_QUANTITY,
    payload
})

export const removeQuantity = (payload) => ({
    type: CartActionTypes.RM_QUANTITY,
    payload
})