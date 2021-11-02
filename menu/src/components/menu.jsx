import MenuItem from "./menuItem";
import items from "./../data/item";
import Navbar from './navbar';
import Catagorys from "./../data/menuLIst";
import { useState,useEffect } from "react";
const Menu=()=>{
   const [menuItems, setMenuItems] = useState(items);
    const [catagorys,setCatagorys] = useState(Catagorys);
    const handleNavClick=(catagory)=>{
            if (catagory === 'all')
            {
                setMenuItems(items);
                return;
            }
            const newItems = items.filter((item) => item.catagory === catagory);
            setMenuItems(newItems);
    }
    return <>
        <Navbar handleNavClick={handleNavClick} catagorys={catagorys}></Navbar>
        <div className="menu">
            {
                menuItems.map((item,i)=>{
                    return <MenuItem key={i} name={item.name} description={item.description} price={item.price} url={item.url}></MenuItem>
                })
            }
        
        </div>
        </>
}


export default Menu;