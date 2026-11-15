import { createContext, useState, useEffect } from "react";

export const MyContext = createContext("");
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  let savedTheme = localStorage.theme != null? localStorage.theme: "light";
  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [response, setResponse] = useState({});
  const saveResponse = (newResponse) => {
    setResponse({ ...response, ...newResponse });
  };
  return (
    <SurveyContext.Provider value={{ response, setResponse, saveResponse }}>
      {children}
    </SurveyContext.Provider>
  );
};
