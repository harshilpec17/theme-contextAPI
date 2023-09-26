import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  // We are using the `useState` Hook which is available from react used to update the UI on the application.

  const [themeMode, setThemeMode] = useState("light");

  // Somehow, If we are creating the empty function as you can see inside the ThemeBtn Component, when we are providing the
  // value towards it. It will update the method. So, catch is we need to provide the exact same name.
  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // It is access the browser property and we are removing the default behavior `light` or the 'dark` mode and add the value
  // which is available in the themeMode. and we are taking the dependency array. If something changes in the themeMode, it will
  // updates the UI
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
