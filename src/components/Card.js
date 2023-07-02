import React, { useState } from "react";

import Heart from "../img/heart.svg";
import Liked from "../img/liked.svg";
import AppContext from "../AppContext";

const Card = ({
  id,
  img,
  title,
  desc,
  price,
  onPlus,
  onFavorite,
  favorited = false,
  added = false,
}) => {
  const { isItemAdded } = React.useContext(AppContext);
  const [isLiked, setIsLiked] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, img, title, desc, price });
  };
  const onClickHeart = () => {
    onFavorite({ id, img, title, desc, price });
    setIsLiked(!isLiked);
  };

  return (
    <div className="card">
      <img src={img} alt="Jeans" />
      {onFavorite && (
        <img
          onClick={onClickHeart}
          className="card_favorite"
          src={!isLiked ? Heart : Liked}
          alt="Favorite"
        />
      )}
      <span className="card_bottom">
        <div className="price">Цена: {price} руб.</div>
        {onPlus && (!isItemAdded(id) ? <button onClick={onClickPlus} className="btn_buy">Добавить</button> : <button onClick={onClickPlus} className="btn_buy">Удалить</button>)}
      </span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
