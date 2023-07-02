import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

import BlackLoose from "./img/Items/BlackLoose.jpg";
import HakyLoose from "./img/HakyLoose.jpg";
import WhiteLoose from "./img/WhiteLoose.jpg";
import Cart from "./components/Cart";
import Favorites from "./pages/Favorites";
import AppContext from "./AppContext";
import Orders from "./pages/Orders";
import BejShort from "./img/BejShort.jpg"
import HakyShort from "./img/HakyShort.jpg"
import BlueShort from "./img/BlueShort.jpg"

const products = [
  {
    id: 1,
    title: "ЧЕРНЫЕ ДЖИНСЫ LOOSE",
    desc: "Lorem ipsum sit amet",
    price: 3199,
    img: BlackLoose,
  },
  {
    id: 2,
    title: "ХАКИ ДЖИСНЫ LOOSE",
    desc: "Lorem ipsum sit amet",
    price: 3199,
    img: HakyLoose,
  },
  {
    id: 3,
    title: "БЕЛЫЕ ДЖИНСЫ LOOSE",
    desc: "Lorem ipsum sit amet",
    price: 3199,
    img: WhiteLoose,
  },
  {
    id: 4,
    title: "БЕЖЕВЫЕ ШОРТЫ COMFORT",
    desc: "Lorem ipsum sit amet",
    price: 2499,
    img: BejShort,
  },
  {
    id: 5,
    title: "ХАКИ ШОРТЫ COMFORT",
    desc: "Lorem ipsum sit amet",
    price: 2499,
    img: HakyShort,
  },
  {
    id: 6,
    title: "ТЁМНО-СИНИЕ ШОРТЫ COMFORT",
    desc: "Lorem ipsum sit amet",
    price: 2499,
    img: BlueShort,
  },
];


function App() {
  const [cartOpened, setCardOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [orders, setOrders] = useState([])

  const addToCart = (obj) => {
    if (cartItems.find((item) => item.id === obj.id)) {
      setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      setCartItems((prev) => [...prev, obj]);
    }
  };
  const onRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const onAddToFavorite = (obj) => {
    if (favorites.find((item) => item.id === obj.id)) {
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      setFavorites((prev) => [...prev, obj]);
    }
  };
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        products,
        favorites,
        isItemAdded,
        setCardOpened,
        setCartItems,
        orders,
        setOrders,
      }}
    >
      <div className="App">
        {cartOpened ? (
          <Cart
            items={cartItems}
            onClose={() => setCardOpened(false)}
            onRemove={onRemoveItem}
          />
        ) : null}
        <Header onClickCart={() => setCardOpened(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                addToCart={addToCart}
              />
            }
            exact
          />
        </Routes>
        <Routes>
          <Route
            path="/favorites"
            element={<Favorites onAddToFavorite={onAddToFavorite} />}
            exact
          />
        </Routes>
        <Routes>
          <Route
            path="/orders"
            element={<Orders />}
            exact
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
