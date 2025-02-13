import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import '../css/Header.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";
import { searchProduct } from "../redux/slices/ProductSlice";

function Header() {

    const [theme, setTheme] = useState(true);
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const {products} = useSelector((store) => store.basket)

    const changeTheme = () => {
        const body = document.querySelector("body");

        if (theme) {
            body.style.backgroundColor = "black";
            body.style.color = "#fff";
        }
        else {
            body.style.backgroundColor = "#fff";
            body.style.color = "black";
        }
        setTheme(!theme);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
        dispatch(searchProduct(e.target.value));
    }

    return (
        <div className='space-between'>
            <div className='flex-row'>
                <NavLink to={"/"}><img className='logo' src="./src/images/logo.png" alt="logo" /></NavLink>
                <NavLink to={"/"} className="logo-text">GRAYISH A.Ş</NavLink>
            </div>
            <div className="flex-row">
                <input value={search} onChange={handleSearch} className='search-input' type="text" placeholder='Bir şeyler ara..' />
                <div className="flex-row">
                    {
                        theme ? <FaMoon className="icon" onClick={changeTheme} /> : <CiLight className="icon" onClick={changeTheme} />
                    }
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error" sx={{ "& .MuiBadge-badge": {
                            right: "4px",
                            transform: "scale(0.8)",
                        }}} >
                        <CiShoppingBasket className="icon" />
                    </Badge>

                </div>
            </div>
        </div>
    )
}

export default Header