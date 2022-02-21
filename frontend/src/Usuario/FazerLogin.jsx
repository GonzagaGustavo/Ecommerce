import axios from "axios";
import React, { useState } from "react";

function FazerLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [err, setErr] = useState("")
  function findUser() {
    let login = {
      email: email,
      senha: senha,
    };
    axios.post("/usuarios/login", login).then((res) => {
      if (res.data === "err") {
        setErr("err")
      } else {
        console.log(res.data);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        window.location.href = "http://localhost:3000/";
      }
    });
  }
  return (
    <div>
      <h1>Fazer login</h1>
      {err === "err" ? (
        <div id="a">
        <div className="alert alert-danger" role="alert">
        Email ou Senha Incorretos!
      </div>
      </div>
      ): (
        <p></p>
      )}
      <div className="inputs">
        <input
          type="email"
          placeholder="Digite seu email"
          className="form-control"
          id="margin"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Insira sua senha"
          className="form-control"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button className="btn btn-success" id="btnLg" onClick={findUser}>
          Fazer Login
        </button>
        <p>
          Novo por aqui?<a href="../CriarConta">Crie Sua Conta!</a>
        </p>
      </div>
    </div>
  );
}

export default FazerLogin;
