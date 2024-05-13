'use client'
import { useEffect, useState } from "react"
import ThemeContext from "@/app/context/themeContext"
import exp from "constants"

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const themeFromStorage: boolean = typeof localStorage !== "undefined" && localStorage.getItem("hotel-theme") ? JSON.parse(localStorage.getItem("hotel-theme")!) : false

    const [darktheme, setDarkTheme] = useState<boolean>(themeFromStorage)

    // const [renderComponent, setRenderComponent] = useState(false)

    // useEffect(() => {
    //     setRenderComponent(true);
    // }, []);

    return (
        <ThemeContext.Provider value={{ darktheme, setDarkTheme }}>
            <div className={` ${darktheme ? 'dark' : ''} min-h-screen `}>
                <div className=" dark:text-white dark:bg-black text-[#1E1E1E]">
                    {children}

                </div>

            </div>

        </ThemeContext.Provider>
    )
}

export default ThemeProvider