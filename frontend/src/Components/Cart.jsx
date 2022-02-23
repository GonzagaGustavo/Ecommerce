import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../Context";

function Cart() {

  // useEffect(() => {
  //   setCart(localStorage.getItem("cartItem")
  //   ? JSON.parse(localStorage.getItem("cartItem"))
  //   : null)
  // }, [])
const { cart } = useContext(cartContext)
console.log(cart)

  if (cart === []) {
    return (
      <div>
        <h1>Nenhum item no carrinho</h1>
        <a href="/">Comprar</a>
      </div>
    );
  } else {
    return (
      <>
        {cart.map((item) => (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
          </div>
        ))}
      {/* </div>
        <div class="container">
          <img src={cart.image} alt="" className="cart-img" />
          <div class="row align-items-end">
            <div class="col">{cart.name}</div>
            <div class="col">{cart.price}</div>
            <div class="col">{cart.descricao}</div>
          </div>
        </div>
        <button className="btn btn-success" id="margin">Finalizar Compra</button> */}
      </>
    );
  }
}

export default Cart;
