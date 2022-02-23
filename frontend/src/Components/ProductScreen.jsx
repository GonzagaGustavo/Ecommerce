import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../Context";

function ProductScreen() {
const [data, setData] = useState([]);
const params = useParams();
const { err, addCart} = useContext(cartContext)

  useEffect(() => {
    axios.post("/api/dataProducts", { id: params.id }).then((res) => {
      console.log(res.data);
      setData(res.data[0]);
    });
  }, []);

const [id, setId] = useState([]);

  // function addCart() {
  //   if (userInfo != null) {
  //     setCart({id: data.id, name: data.name})
  //     // setId([...id, { id: data.id, name: data.name }]);
  //   } else {
  //     setErr(true);
  //   }
  // }

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(id));
  }, [id]);

  return (
    <div className="ProductScreen">
      <div className="img-desc">
        <img className="img-p" src={data.image} alt="" />
        <p className="descricao">{data.descricao}</p>
      </div>
      <div className="info-p">
        <h1>{data.name}</h1>
        <p className="prices">R${data.price}</p>
        {data.countInStock > 0 ? (
          <p className="success">Em estoque</p>
        ) : (
          <p>Sem estoque</p>
        )}
        <button className="btn btn-primary" onClick={() => addCart(data)}>
          Comprar!
        </button>
        {err ? (
          <div class="alert alert-warning" role="alert">
            Efetue o login para adicionar um produto ao carrinho
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default ProductScreen;
