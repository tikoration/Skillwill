import { Link, Outlet } from "react-router-dom"

const LinkLayout = () => {
    return(
        <div>
            <div className="nav-bar">
                <Link to={'/'}>Main</Link>
                <Link to={'/about'}>About</Link>
             </div>            
            <Outlet />
        </div>
    )
}

export default LinkLayout