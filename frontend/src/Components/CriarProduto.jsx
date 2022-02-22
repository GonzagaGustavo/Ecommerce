import React, { useState } from "react";
import axios from "axios";
import uniqid from "uniqid";

function CriarProduto() {
  const [name, setName] = useState("");
  const [colecao, setColecao] = useState("");
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [countInStock, setCountInStock] = useState(0);

  function criar() {
    let produto = {
      name: name,
      colecao: colecao,
      image: image,
      price: price,
      descricao: descricao,
      countInStock: countInStock,
      id: uniqid()
    };
    console.log(produto)
    axios
      .post("/api/CriarProdutos", produto)
      .then((res) => {
        alert(res.data);
      })
      .then((err) => console.log(err));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Nome do produto"
        className="form-control"
        id="margin"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Coleção do produto"
        className="form-control"
        id="margin"
        readOnly="o"
        value={"Nenhuma"}
        onChange={(e) => setColecao(e.target.value)}
      />
      <input type="text" placeholder="Link da imagem do produto" className="form-control" id="margin" value={image}
        onChange={(e) => setImage(e.target.value)} />
      <div className="input-group mb-3">
        <span className="input-group-text">R$</span>
        <span className="input-group-text">{price}</span>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <input
        type="text"
        placeholder="Descrição do produto"
        className="form-control"
        id="margin"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantidade em estoque"
        id="margin"
        className="form-control"
        value={countInStock}
        onChange={(e) => setCountInStock(e.target.value)}
      />
      <button className="btn btn-success" onClick={criar}>
        Criar
      </button>
    </div>
  );
}

export default CriarProduto;
