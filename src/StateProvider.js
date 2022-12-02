import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
   <StateContext.Provider value={useReducer(reducer, initialState)}>
   {children}
   </StateContext.Provider> 
)

export const useStateValue = () => useContext(StateContext);
// ამას რომ შევქმნით, შემდეგი ნაბიჯია index.js  ში <StateProvider>  ის შემორტყმა აპზე ვრაპერად