import { Store } from "../Store"

const Reducer = (state, action) =>{
    switch (action.type){
        case "ADD_TO_CART":
  const productId = action.payload.id;

  // Check if the product already exists in the cart
  const existingProductIndex = state.cart.findIndex((item) => item.id === productId);

  if (existingProductIndex !== -1) {
    // If the product exists, update the quantity and proTotalPrice
    const updatedCart = state.cart.map((item, index) => {
      if (index === existingProductIndex) {
        const updatedItem = {
          ...item,
          qty: item.qty + 1,
          proTotalPrice: (item.qty + 1) * item.price
        };
        return updatedItem;
      }
      return item;
    });

    return {
      ...state,
      cart: updatedCart
    };
  } else {
    // If the product doesn't exist, add it to the cart
    return {
      ...state,
      cart: [...state.cart, { ...action.payload, qty: 1, proTotalPrice: action.payload.price }]
    };
  }                    
        case "REMOVE_FROM_CART":
            return{ 
                ...state, cart: state.cart.filter((c) => c.id !== action.id) 
            }
        // case "RESET_CATEGORY":
        //     return {
        //         store : Store
        //     }
        // case "SELECT_CATEGORY":
        //     return {
        //        ...state,
        //         store: state.store.filter((product) => product.category === action.category)
        //     }
        case "INCRESS_QTY":
            const getIndex = state.cart.findIndex((item) => item.id === action.proId)

            if(getIndex !== -1){
                const updatedCart = state.cart.map((item, index) => {
                    if (index === getIndex) {
                      const updatedItem = {
                        ...item,
                        qty: item.qty + 1,
                        proTotalPrice: (item.qty + 1) * item.price
                      };
                      return updatedItem;
                    }
                    return item;
                  });
              
                  return {
                    ...state,
                    cart: updatedCart
                };
            }
        case "DECRESS_QTY":
            const getI = state.cart.findIndex((item) => item.id === action.proId)
            if(getI !== -1){
                const updatedCart = state.cart.map((item, index) => {
                    if (index === getI) {
                      const updatedItem = {
                        ...item,
                        qty: item.qty - 1,
                        proTotalPrice: (item.qty - 1) * item.price
                      };
                      return updatedItem;
                    }
                    return item;
                  });
              
                  return {
                    ...state,
                    cart: updatedCart
                };
            }
        default:{
            return state
        }
    }
}
export default Reducer

export const FilterReducer = (state, action) => {
    switch (action.type){
        case "SELECT_CATEGORY":
            return {
              ...state, filterByCategory: action.category
        }
        case "IN_STOCK":
          return{
            ...state, InStock: !state.InStock
        }
        case "SORT_BY_PRICE" :
          return{
            ...state, filterByPrice: action.payload
        }
        case "SEARCH_BY_QUERY":
          return{
            ...state, SearchByQuery: action.query
        }
        case "FILTER_BY_RATING":
           return{
             ...state, Byrating: action.rate
           }
        case "CLEAR_FILTERS":
          return{
            filterByCategory: "",
            InStock: false,
            SearchByQuery: "",
            Byating: 0
        }
    }
}