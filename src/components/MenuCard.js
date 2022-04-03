import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card-container">
        {menuData.map((menu) => {
          const { id, name, category, description, image } = menu;
          return (
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-category subtle">{menu.category}</span>
                  <h1 className="card-title">{name}</h1>
                  <span className="card-description subtle">{description}</span>
                  <div className="card-read">read</div>
                  <img src={image} alt="images" className="card-media" />
                </div>
                <span className="card-tag  subtle">Order Now</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
