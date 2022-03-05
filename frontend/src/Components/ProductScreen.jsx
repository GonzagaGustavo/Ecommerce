import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function ProductScreen() {
  const [err, setErr] = useState(false);
  const [data, setData] = useState([]);
  const params = useParams();

  //verificar se o usuario tem login iniciado
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
// Pegar informações do produto  
  useEffect(() => {
    axios.post("/api/dataProducts", { id: params.id }).then((res) => {
      console.log(res.data);
      setData(res.data[0]);
    });
  }, []);
//Verificar se esta logado e se tem estoque
  function addCart() {
    if (userInfo != null) {
      if(data.countInStock > 0) {
        //Adicionando no carrinho
        const meusProdutos = localStorage.getItem('cart')
        let saveProducts = JSON.parse(meusProdutos) || []

        saveProducts.push(data)
        localStorage.setItem('cart', JSON.stringify(saveProducts))
        toast.success("Produto adicionado a carrinho!")
      } else {
        toast.info("Produto sem estoque!")
      }
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
          <p className="red">Sem estoque</p>
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
