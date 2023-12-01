import { createContext, useContext, useReducer } from 'react';
import myReducer, { actionTypes } from '../reducers/myReducer';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(myReducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;