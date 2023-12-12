import { AppBar, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return ( 
        <AppBar position="fixed">
            <Toolbar>
                <div className="flex-1"></div>
                <NavLink 
                    to="/main"
                    className="font-bold select-none self-stretch flex items-center"
                >
                    Challenge App
                </NavLink>
                <div className="flex-1 self-stretch flex justify-end">
                    <NavLink
                        to="/hostory"
                        className="select-none flex items-center"
                    >
                        히스토리
                    </NavLink>
                </div>
            </Toolbar>
        </AppBar> 
    );
}