import React, { useState } from 'react'
import './Usuario.css'
import axios from 'axios'
import uniqid from 'uniqid'

function CriarUsuario() {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [idade, setIdade] = useState("")
const [senha, setSenha] = useState("")
const [tem, setTem] = useState("")

function criaruser() {
    let user = {
        name: name,
        email: email,
        idade: idade,
        senha: senha,
        id: uniqid()
    }
    if(name && email && idade && senha !== "") {
        axios.post("/usuarios/criaruser", user).then(res => {
            setTem(res.data)
        }).then(err => {
            console.log(err)
        })
        setName("")
        setEmail("")
        setIdade("")
        setSenha("")
    } else {
        setTem("oi")
    }
}

  return (
    <div>
        <h1 className='bv'>Olá seja Bem-vindo a minha loja!</h1>
        {tem === "Usuario criado!" ? (
            <div class="alert alert-primary" role="alert">
            Usuario Criado!
          </div>
        ):(
            <p></p>
        )}
        {tem === "oi" ? (
            <div class="alert alert-danger" role="alert">
            Preencha todos os campos!
          </div>
        ):(
            <p></p>
        )}
        <div className='inputs'>
        <input type="text" placeholder='Insira seu nome' className='form-control' id='margin' 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input type="email" placeholder='Insira seu email' className='form-control' id='margin'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input type="number" placeholder='Insira sua idade' className='form-control' id='margin'
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        />
        <input type="password" placeholder='Crie uma senha' className='form-control' id='margin'
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        />
        <button className='btn btn-success' onClick={criaruser}>Criar Conta!</button>
        </div>
    </div>
  )
}

export default CriarUsuario