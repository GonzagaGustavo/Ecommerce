import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function EditarProduto() {
const params = useParams()

const [name, setName] = useState("");
const [colecao, setColecao] = useState("");
const [price, setPrice] = useState(0);
const [descricao, setDescricao] = useState("");
const [countInStock, setCountInStock] = useState(0);

useEffect(() => {
    axios.post("/api/edicao", {id: params.id}).then(res => {
        const data = res.data[0]
        setName(data.name)
        setColecao(data.colecao)
        setPrice(data.price)
        setDescricao(data.descricao)
        setCountInStock(data.countInStock)
    })
}, [])

    function editar() {
        const atualizaProduto = {
            name: name,
            colecao: colecao,
            price: price,
            descricao: descricao,
            countInStock:countInStock,
            id: params.id
        }
        axios.post("/api/atualizaProduto", atualizaProduto).then((res) => {
            alert(res.data)
        }).then((err) => console.log(err))
    }
  return (
    <div>
        <h1>Edite o produto</h1>
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
        value={colecao}
        onChange={(e) => setColecao(e.target.value)}
      />
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
      <button className="btn btn-success" onClick={editar}>
        Editar
      </button>
    </div>
  )
}

export default EditarProduto