import React, { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  }, []);
console.log()

  if(cart.length === 0) {
    return (
      <div>
        <h1>Nenhum item no carrinho</h1>
        <a href="/">Comprar</a>
      </div>
    );
  } else {
    return (
      <>
        {cart.map((products) => (
          <div>
            <div class="container" key={products.id}>
              <img src={products.image} alt="" className="cart-img" />
              <div class="row align-items-end">
                <div class="col">{products.name}</div>
                <div class="col">{products.price}</div>
                <div class="col">{products.descricao}</div>
              </div>
            </div>
          </div>
        ))}
        <button className="btn btn-success" id="margin">
          Finalizar Compra
        </button>
      </>
    );
  }
}

export default Cart;
