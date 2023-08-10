import CartActionTypes from "./action-type"

const initialState = {
    products: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case CartActionTypes.ADD_PRODUCT:
            //verificar se ele ja esta no carrinho
            const productIsAlreadyInCart = state.products.some((product) => product.id === action.payload.id)

            if(productIsAlreadyInCart){
                return{...state, products: state.products.map(product => product.id === action.payload.id ? {...product, quantity: product.quantity + 1} : product ) }}
            return{
                ...state, 
                products: [...state.products, {...action.payload, quantity: 1}]
            };
            
        case CartActionTypes.REMOVE_PRODUCT:
            console.log(action)
            return{
                ...state,
                products:state.products.filter(product => product.id !== action.payload)
            }
        case CartActionTypes.ADD_QUANTITY:
            return{
                ...state,
                products: state.products.map(product => product.id === action.payload ? {...product, quantity: product.quantity + 1}: product)
            }
            case CartActionTypes.RM_QUANTITY:
                return{
                    ...state,
                    products: state.products.map(product => product.id === action.payload ? {...product, quantity: product.quantity - 1}: product).filter((product) => product.quantity > 0)
                }
        default:
            return state
    }
}

export default cartReducer