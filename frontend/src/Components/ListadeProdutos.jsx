import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ListadeProdutos() {
  const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/api/pegarProdutos').then(res => {
            setProducts(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    function deleteProduto(id) {
      axios.post("/api/deleteProduto", {id: id}).then(res => {
        alert(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  return (
    <div>
        <Link to="../CriarProduto"><button className="btn btn-success">Criar Produto</button></Link>
        <div className="flex">
      {products.map((product) => (
        <div className="Home" key={product.id}>
          <img src={product.image} alt="" />
          <p>{product.name}</p>
          <p>{product.price}</p>
          <Link to={`/EditarProduto/${product.id}`}><button className="btn btn-warning">Editar</button></Link>
          <button className="btn btn-danger" onClick={() => {deleteProduto(product.id)}}>Deletar</button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default ListadeProdutos;
