import { Link } from "react-router-dom"

 const Header = () => {

    return (
        <header>
            <Link className="header-link" to={'/'}>Main Page</Link>
            <Link className="header-link" to={'/create'}>Create Page</Link>
            <Link className="header-link" to={'/donetasks'}>Completed Tasks</Link>
        </header>
    )
 }

 export default Header