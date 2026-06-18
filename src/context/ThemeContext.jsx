import {
  createContext,
  useContext,
  useReducer,
} from "react";

import {
  themeReducer,
  initialState,
} from "../reducer/themeReducer";

const ThemeContext =
  createContext();

export function ThemeProvider({
  children,
}) {
  const [state, dispatch] =
    useReducer(
      themeReducer,
      initialState
    );

  return (
    <ThemeContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(
    ThemeContext
  );
}