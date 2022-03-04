<<<<<<< HEAD
import React, { useContext } from "react";
import { cartContext } from "../Context";

function Cart() {

const { cart } = useContext(cartContext)
=======
import React, { useState } from "react";

function Cart() {
  const cart = localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : null;
>>>>>>> parent of 56cc6a0 (.)
console.log(cart)
  if (cart === null) {
    return (
      <div>
        <h1>Nenhum item no carrinho</h1>
        <a href="/">Comprar</a>
      </div>
    );
  } else {
    return (
      <>
        <div class="container">
          <img src={cart.image} alt="" className="cart-img" />
          <div class="row align-items-end">
            <div class="col">{cart.name}</div>
            <div class="col">{cart.price}</div>
            <div class="col">{cart.descricao}</div>
          </div>
        </div>
        <button className="btn btn-success" id="margin">Finalizar Compra</button>
      </>
    );
  }
}

export default Cart;
