import React, { useState } from "react";
import "../components/Products.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

function Products(props) {
  
  return (
    <>
      <div className="cards-container">
        {props.item.map((menu) => {
          return (
            <div key={menu.id} className="card">
              <img src={menu.image} className="card_img" />
              <div className="card-body">
                <h5 className="card-title">{menu.name}</h5>
                <br />
                <p className="card-text">{menu.price}</p>

                <Link to={`/menu/${menu.name}`}>
                  <Button>Click me</Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
