import { createContext, useReducer } from "react"
import Reducer, { FilterReducer } from "./Reducer"
import { Store } from '../Store'

export const CartContext = createContext(null)

export const CartContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(Reducer,{
    store: Store,
    cart:[],
  })

    
  const [FilterState, FilterDispatch] = useReducer(FilterReducer,{
    filterByCategory: "",
    InStock: false,
    SearchByQuery: "",
    Byrating: 0
  })

  return(
        <CartContext.Provider value={{state,dispatch, FilterState, FilterDispatch}}>
           {children}
        </CartContext.Provider>
  )

}
