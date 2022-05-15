import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, totalItem} = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header>
      </>
    );
  }

  return (
    <>
      <header>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
