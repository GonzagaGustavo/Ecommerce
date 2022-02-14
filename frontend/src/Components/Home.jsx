import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/pegarProdutos")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="responsive">
      {products.map((product) => (
          <div className="Home" key={product.id}>
            <a className="nada" href={`/Produto/${product.id}`}>
            <img src={product.image} alt="" />
            <h2>{product.name}</h2>
            <p className="price">R${product.price}</p>
            </a>
          </div>
      ))}
    </div>
  );
}

export default Home;
