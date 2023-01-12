import React, { useReducer, useContext, createContext } from "react";

type IAction = {
  type: string;
  payload: any;
};

type IContext = {
  language: string;
  setLanguage: (language: string) => void;
};

type IProps = {
  children: React.ReactNode;
};

const initialState = {
  language: "vi",
  setLanguage: () => {},
};

const reducer = (state: IContext, { type, payload }: IAction) => {
  switch (type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        language: payload,
      };

    default:
      return state;
  }
};

const GlobalContext = createContext<IContext>(initialState);
const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const _handleChangeLanguage = (language: string) => {
    dispatch({
      type: "SET_LANGUAGE",
      payload: language,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setLanguage: _handleChangeLanguage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider, useGlobalContext };
