import { useState } from "react"
import { ThemeContext } from "../store/ThemeContext";



export function ThemeContextProvider ({children}) {
    const [darkMode, setDarkMode] = useState(true);
    

    function toggleTheme() {
        setDarkMode((mode) => !mode);
    }

    // useEffect(() => {
    //     const darkClass = 'bg-natural-900';
    //     const ligthClass = 'bg-natural-100';
    //     return(
    //         darkMode ? darkClass : ligthClass
    //     );
    // }, [darkMode]);

    return(
        <ThemeContext.Provider value={{toggleTheme, darkMode}}>
            {children}
        </ThemeContext.Provider>
    )
};