import React from "react";
import AppContext from "../AppContext";

const Info = ({ onClose, title, img }) => {
  const { setCardOpened } = React.useContext(AppContext)
  return (
    <div className="cart_empty">
      <img className="cart_empty_btn" src={img} alt="empty" />
      <h2>{title}</h2>
      <button onClick={() => setCardOpened(false)} className="greenBtn">
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
