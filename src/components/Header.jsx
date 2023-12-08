import classNames from "classnames";
import { NavLink } from "react-router-dom";

function Header() {
    return ( 
        <>
            <header className="flex flex-shrink-0">
                <NavLink 
                    to="/"
                    className="mr-auto p-3 font-bold hover:text-red-500 cursor-pointer"
                >
                    RC
                </NavLink>
                <ul className="flex">
                    <li>
                        <NavLink
                            to="/main"
                            className={({ isActive }) => classNames(
                                `block p-3 font-bold hover:text-red-500 cursor-pointer`,
                                {"text-red-500": isActive}
                                ) 
                            }
                        >
                            메인
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/history"
                            className={({ isActive }) => classNames(
                                `block p-3 font-bold hover:text-red-500 cursor-pointer`,
                                {"text-red-500": isActive}
                                ) 
                            }
                        >
                            히스토리
                        </NavLink>
                    </li>
                </ul>
            </header>
        </> 
    );
}

export default Header;