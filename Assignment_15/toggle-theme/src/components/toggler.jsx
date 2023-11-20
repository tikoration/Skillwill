import { useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import useWindowResize from "../hooks/useWindowResize"

const Toggler = () => {

    const [isDark, setIsDark] = useLocalStorage('tab',false)
    const [theme, setTheme] = useState("")
    const {width} = useWindowResize()

    const handleClick= () => {
        if(width > '481'){
            setIsDark(prevState => !prevState)
        }
    }

    useEffect(() => {
       if(width < '481'){
        setIsDark(false)
       }
    }, [setIsDark, width])

    useEffect(() => {
        const themeStyle = isDark ? "dark-mode" : "light-mode"
        setTheme(themeStyle)
    }, [isDark])

    return(
        <div className={theme}>
            <button onClick={handleClick}>
                Toggle Theme
            </button>
        </div>
    ) 
}

export default Toggler