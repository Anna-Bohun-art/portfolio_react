import { createContext, useState} from 'react';


export const ThemeContext = createContext({});
const themes = {
    dark: {
        backgroundColor: "rgba(0,0,0, 0.7)",
        color: "rgba(250,250,250)",
    },
    light: {
        backgroundColor: "rgba(51,25,24, 0.7)",
        color: "rgba(250,250,250)",
    }
}
export const ThemeProvider = ({ children }) => {
    const [ isDark, setIsDark ] = useState(false);
    const theme = isDark ? themes.dark : themes.light;
    const toggleTheme = () => {
        setIsDark(!isDark);
    };
    return(
    <ThemeContext.Provider value={[{theme, isDark}, toggleTheme]}>
        {children}
    </ThemeContext.Provider>
    );
};