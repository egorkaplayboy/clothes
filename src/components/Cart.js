import React, { useState } from "react";
import Info from "./Info";
import { useCart } from "../hooks/useCart";
import AppContext from "../AppContext";

import BtnRemove from "../img/btn-remove.svg";
import CartEmpty from "../img/empty-cart.jpg";
import CompleteOrder from "../img/complete-order.jpg"


const Cart = ({ onClose, items = [], onRemove }) => {
  const { setCartItems, totalPrice } = useCart()
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const {setOrders} = React.useContext(AppContext)

  const onClickOrder = () => {
    setIsOrderComplete(true);
    setCartItems([]);
    setOrders((prev) => [...prev, ...items])
  };

  return (
    <div className="overlay">
      <div className="cart">
        <h2 className="cart_title">
          Корзина
          <img
            onClick={onClose}
            className="BtnRemove"
            src={BtnRemove}
            alt="Exit"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="cart_items">
              {items.map((obj) => (
                <div className="cart_item">
                  <img src={obj.img} alt="jeans" />
                  <div className="cart_items_info">
                    <h5>{obj.title}</h5>
                    <p>Цена: {obj.price} руб.</p>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="cart-remove"
                    src={BtnRemove}
                    alt="remove"
                  />
                </div>
              ))}
            </div>
            <div className="cart_total">
              <h4>Цена: {Math.round(totalPrice)} руб.</h4>
              <p>Налог 5%: {Math.round(totalPrice * 0.05)} руб.</p>
              <button onClick={onClickOrder} className="greenBtn">
                Оформить заказ
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            img={isOrderComplete ? CompleteOrder : CartEmpty}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
