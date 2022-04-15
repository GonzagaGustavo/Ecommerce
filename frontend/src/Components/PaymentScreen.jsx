import React, { useEffect, useState } from "react";
import { RiBankCard2Fill } from "react-icons/ri";
import { AiOutlineBarcode } from "react-icons/ai";

function PaymentScreen() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [payForm, setPayForm] = useState("");

  useEffect(() => {
    const info = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    setName(info.name);
    setEmail(info.email);
  }, []);

  return (
    <div className="grid">
      <div className="alert alert-warning">
        <h2 className="red">
          Este site foi feito com intuitos de aprendizagem e qualquer compra
          efetuada não será entregue!
        </h2>
        <p>Mas se quiser fazer uma doação estarei aceitando :)</p>
      </div>
      <h1>Prencha as informações e faça o pagamento</h1>
      <input
        type="text"
        placeholder="Seu nome:"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
      />
      <br />
      <input
        type="number"
        placeholder="Seu CPF:"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        className="form-control"
      />
      <br />
      <input
        type="email"
        placeholder="Seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
      />
      <p className="red">
        OBS: É importante que as informações estejam corretas!
      </p>

      <h3>Opções de pagamento</h3>
      <hr />
      <div className="pay">
        <button className="btn btn-success" onClick={() => setPayForm("cartao")}>
          <RiBankCard2Fill /> Cartão de Crédito
        </button>
        <button className="btn btn-success" onClick={() => setPayForm("pix")}>
          Pix
        </button>
        <button
          className="btn btn-success"
          onClick={() => setPayForm("boleto")}
        >
          <AiOutlineBarcode /> Boleto Bancário
        </button>
      </div>

      {payForm === "cartao" ? (
        <div className="sobrepor">
          <h1>Cartão</h1>
          <button onClick={() => setPayForm("")}>Salvar</button>
        </div>
      ) : (
        <p style={{ display: "none;" }}></p>
      )}
      {payForm === "boleto" ? (
        <div className="sobrepor">
          <h1>Boleto</h1>
          <button onClick={() => setPayForm("")}>Salvar</button>
        </div>
      ) : (
        <p style={{ display: "none;" }}></p>
      )}
      {payForm === "pix" ? (
        <div className="sobrepor">
          <h1>Pix</h1>
          <button onClick={() => setPayForm("")}>Salvar</button>
        </div>
      ) : (
        <p style={{ display: "none;" }}></p>
      )}
    </div>
  );
}

export default PaymentScreen;
