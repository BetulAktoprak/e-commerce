import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import '../css/Header.css';
import { useState } from "react";

function Header() {

    const [theme, setTheme] = useState(true);

    const changeTheme = () => {
        const root = document.getElementById("root");
        
        if(theme){
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        }
        else{
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        }
        setTheme(!theme);
    }

    return (
        <div className='space-between'>
            <div className='flex-row'>
                <img className='logo' src="./src/images/logo.png" alt="logo" />
                <p className='logo-text'>GRAYISH A.Ş</p>
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