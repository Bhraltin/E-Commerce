const initialState = {
    cart: [],
    payment: {},
    address: {},
  }
  
const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CART":
            return { ...state, cart: action.payload };
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload] // Add the new item to the cart
            };
        case "SET_PAYMENT":
            return { ...state, payment: action.payload };
        case "SET_ADDRESS":
            return { ...state, address: action.payload };
        default:
            return state;
    }
};

  
  export default shoppingCartReducer
