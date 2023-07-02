import React from "react";
import Card from "../components/Card";
import AppContext from "../AppContext";

import Cry from "../img/crying.png";

function Orders() {
  const { orders } = React.useContext(AppContext);

  return (
    <div className="main">
      <div className="search">
        <h2>Мои заказы</h2>
      </div>
      <div className="content">
        {orders.length > 0 ? (
          orders.map((item, index) => <Card key={index} {...item} />)
        ) : (
          <div className="crying">
            <img height={100} className="img_cry" src={Cry} alt="Cry" />
            <p>Вы еще не сделали ни одного заказа</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
