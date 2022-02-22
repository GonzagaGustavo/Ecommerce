import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductScreen() {
  const [data, setData] = useState([]);
  const params = useParams();
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const [err, setErr] = useState(false);

  useEffect(() => {
    axios.post("/api/dataProducts", { id: params.id }).then((res) => {
      console.log(res.data);
      setData(res.data[0]);
    });
  }, []);
  function addCart() {
    if (userInfo != null) {
      localStorage.setItem("cartItem", JSON.stringify(data));
    } else {
      setErr(true);
    }
  }

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
        <button className="btn btn-primary" onClick={addCart}>
          Comprar!
        </button>
        {err? (<div class="alert alert-warning" role="alert">
            Efetue o login para adicionar um produto ao carrinho
        </div>):(
        <p></p>
        )}
      </div>
    </div>
  );
}

export default ProductScreen;
