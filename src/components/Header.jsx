import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import '../css/Header.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {

    const [theme, setTheme] = useState(true);

    const changeTheme = () => {
        const body = document.querySelector("body");
        
        if(theme){
            body.style.backgroundColor = "black";
            body.style.color = "#fff";
        }
        else{
            body.style.backgroundColor = "#fff";
            body.style.color = "black";
        }
        setTheme(!theme);
    }

    return (
        <div className='space-between'>
            <div className='flex-row'>
                <NavLink to={"/"}><img className='logo' src="./src/images/logo.png" alt="logo" /></NavLink>
                <NavLink to={"/"} className="logo-text">GRAYISH A.Ş</NavLink> 
            </div>
            <div className="flex-row">
                <input className='search-input' type="text" placeholder='Bir şeyler ara..' />
                <div>
                    {
                        theme ? <FaMoon className="icon" onClick={changeTheme} /> : <CiLight className="icon" onClick={changeTheme} />
                    }
                    
                    <CiShoppingBasket className="icon" />
                </div>
            </div>
        </div>
    )
}

export default Header