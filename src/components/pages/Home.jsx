import React from "react";
import Card from "../components/Card";
import AppContext from "../AppContext";

import Loop from ".../img/search.svg";

function Home({
  products,
  searchValue,
  onChangeSearchInput,
  onAddToFavorite,
  addToCart,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  return (
    <div className="main">
      <div className="search">
        <h2>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Вся одежда"}
        </h2>
        <div className="search_input">
          <img height={25} src={Loop} alt="search" />
          <input
            onChange={onChangeSearchInput}
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>
      <main className="content">
        {products
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              onPlus={(obj) => addToCart(item)}
              onFavorite={(obj) => onAddToFavorite(item)}
              added={isItemAdded(item && item.id)}
              {...item}
            />
          ))}
      </main>
    </div>
  );
}

export default Home;
