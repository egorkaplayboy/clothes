import React from "react";
import Card from "../components/Card";
import AppContext from "../AppContext";

import Cry from "../img/crying.png";

function Favorites({ items, onAddToFavorite }) {
  const { favorites } = React.useContext(AppContext);
  return (
    <div className="main">
      <div className="search">
        <h2>Мои закладки</h2>
      </div>
      <div className="content">
        {favorites.length > 0 ? (
          favorites.map((item, index) => (
            <Card
              key={item.id}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...item}
            />
          ))
        ) : (
          <div className="crying">
            <img height={100} className="img_cry" src={Cry} alt="Cry" />
            <p>У вас пока нет избранных товаров</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
