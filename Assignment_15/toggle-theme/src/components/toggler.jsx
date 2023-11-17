import { useEffect, useState } from "react"

const Toggler = () => {

    const [isDark, setIsDark] = useState(false)
    const [theme, setTheme] = useState("")

    const handleClick= () => {
        setIsDark(prevState => !prevState)
        console.log(isDark)
    }

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