import { Link } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { languageSelector, toggleLanguage } from "../store/language/language.slice"
import { languageOptions } from "../data/languageData"
import { themeSelector, toggleTheme } from "../store/theme/theme.slice"

 const Header = () => {

const {language} = useSelector(languageSelector)
const {theme} = useSelector(themeSelector)
const dispatch = useDispatch()

const toggleLan = () => {
    dispatch(toggleLanguage())
}

const toggleMode = () => {
    dispatch(toggleTheme())
}

const languageObj = languageOptions[language]

    return (
        <header>
            <Link className="header-link" to={'/'}>{languageObj.mainPage}</Link>
            <Link className="header-link" to={'/create'}>{languageObj.createPage}</Link>
            <Link className="header-link" to={'/donetasks'}>{languageObj.completedTasks}</Link>
            <img onClick={toggleLan} className="lang" src={languageObj.flag} alt={language} />
            <button onClick={toggleMode}>{theme === "dark" ? "light" : "dark"}</button>
        </header>
    )
 }

 export default Header