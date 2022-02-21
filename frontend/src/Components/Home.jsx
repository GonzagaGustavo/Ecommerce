import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/api/pegarProdutos")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (loading === true) {
    return (
      <div id="center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="responsive">
        {products.map((product) => (
          <div className="Home" key={product.id}>
            <a className="nada" href={`/Produto/${product.id}`}>
              <img src={product.image} alt="" className="img-home" />
              <h2>{product.name}</h2>
              <p className="price">R${product.price}</p>
              <p className="opacity">{product.descricao}</p>
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
