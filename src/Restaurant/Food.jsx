import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuApi.js";
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];

console.log(uniqueList);

const Food = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };


    return (
        <div>

            <Navbar filterItem={filterItem} menuList={menuList}/>

            <MenuCard menuData={menuData}/>
        </div>
    );
};
export default Food;

