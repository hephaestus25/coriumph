export const actionType = {
    SET_USER: "SET_USER",
    SET_SHOE_ITEMS: "SET_SHOE_ITEMS",
    SET_CART_SHOW: "SET_CART_SHOW",
    SET_CARTITEMS: "SET_CARTITEMS",

};

const reducer = (state, action) => {
    // console.log(action);
  
    switch (action.type) {
      case actionType.SET_USER:
        return {
          ...state,
          user: action.user,
        };
       
      case actionType.SET_SHOE_ITEMS:
          return {
            ...state,
            shoeItems: action.shoeItems,
          };

          case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };
      
      case actionType.SET_CARTITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };

    default:
      return state;
  }
};

export default reducer;
