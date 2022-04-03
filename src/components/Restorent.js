import React, { useState } from "react";
import "./RestorentStyle.css";
import Menu from "./MenuContentAPI";
import MenuCard from "./MenuCard";
import NavBar from "./NavBar";

const uniqueList = [
  ...new Set(
    Menu.map((currCate) => {
      return currCate.category;
    })
  ),
  "All",
];

const Restorent = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (currCate) => {
    if (currCate === "All") {
      setMenuData(Menu);
      return;
    } else {
      setMenuData(
        Menu.filter((item) => {
          return currCate === item.category;
        })
      );
    }
  };

  return (
    <>
      <NavBar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restorent;
