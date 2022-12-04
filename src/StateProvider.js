import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
   <StateContext.Provider value={useReducer(reducer, initialState)}>
   {children}
   </StateContext.Provider> 
)

export const useStateValue = () => useContext(StateContext);
// next step after doing this is to wrap <StateProvider> to the app inside index.js
