import { createContext, useContext } from "react";

// Instead of Making the two different file for the `createContext` and `useContext`.
// we are introducing the one file configuration for the contextAPI.

// we are creating the `createContext` as like before but storing in the variable of ThemeContext for better understanding.
// There are three value passed as a object.
// 1.themeMode called as the when the application start it will show the light mode at the starting
// 2.we are giving the empty `darkTheme` method, If we want we can inject the logic of it
// 3.as like before, we are giving the empty `darkTheme` method, If we want we can inject the logic of it
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// Instead of creating the another file, we are creating one file for the ThemeProvider, which is stored in the variable
// it will work like the wrapping component
export const ThemeProvider = ThemeContext.Provider;

// We are introducing the `useTheme` Function, which return the `useContext(ThemeContext)`, a value we are taking from
// this file, instead of creating the another file.
export default function useTheme() {
  return useContext(ThemeContext);
}
