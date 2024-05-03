import { Dispatch, SetStateAction, createContext } from "react";

type ThemeContextType = {
    darktheme: boolean;
    setDarkTheme: Dispatch<SetStateAction<boolean>>
}

const ThemeContext = createContext<ThemeContextType>(
    {
        darktheme: false,
        setDarkTheme: () => null,
    }
)

export default ThemeContext;