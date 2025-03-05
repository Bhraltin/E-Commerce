export const setCart = (cart) => ({ type: "SET_CART", payload: cart });
export const addToCart = (item) => ({ type: "ADD_TO_CART", payload: item }); // Action to add an item to the cart
export const setPayment = (payment) => ({ type: "SET_PAYMENT", payload: payment })
export const setAddress = (address) => ({ type: "SET_ADDRESS", payload: address })
