import React from "react";

const NavBar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((currCate, index) => {
            return (
              <button
                className="btn-group__item"
                key={index}
                onClick={() => filterItem(currCate)}
              >
                {currCate}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
