import { Link } from "react-router-dom"
import { languageOptions, useLanguageContext } from "../contexts/LanguageContext"


 const Header = () => {
const {language, toggleLanguage} = useLanguageContext()
const languageObj = languageOptions[language]

    return (
        <header>
            <Link className="header-link" to={'/'}>{languageObj.mainPage}</Link>
            <Link className="header-link" to={'/create'}>{languageObj.createPage}</Link>
            <Link className="header-link" to={'/donetasks'}>{languageObj.completedTasks}</Link>
            <img onClick={toggleLanguage} className="lang" src={languageObj.flag} alt={language} />
        </header>
    )
 }

 export default Header