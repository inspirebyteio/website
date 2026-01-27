import { NavLink } from "react-router-dom";

const MainMenu = () => {
    return (
        <nav className="main-menu d-none d-lg-block">
            <ul className="d-flex">
                <li>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/services"}>
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/projects"}>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/blog"}>
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/team"}>
                        Team
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/contact"}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
