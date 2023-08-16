import { createContext, useContext, useReducer } from "react";

 export const StateContext = createContext();

export const StateProvider = ({iniialState, reducer, children}) =>{
  return <StateContext.Provider value={useReducer(reducer, iniialState)}>
    {children}
  </StateContext.Provider>
}

export const useStateProvider = () => useContext(StateContext);

