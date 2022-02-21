import './App.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiUserCheck } from 'react-icons/bi'
import { BiCopyright } from 'react-icons/bi'
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListadeProdutos from './Components/ListadeProdutos';
import CriarProduto from './Components/CriarProduto';
import ProductScreen from './Components/ProductScreen';
import EditarProduto from './Components/EditarProduto';
import CriarUsuario from './Usuario/CriarUsuario';
import FazerLogin from './Usuario/FazerLogin';

function App() {
  const userInfo = localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')):null
  console.log(userInfo)
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <a href="/">Inicio</a>
        <a href="/ListadeProdutos">Produtos</a>
        <a href="/Coleçoes">Coleções</a>
        <a href="/Cart"><AiOutlineShoppingCart className='cart-icon'/></a>
        {
          userInfo? (
            <a className='signin-1' href="#">{userInfo.name} <BiUserCheck className='user-icon'/></a>
          ) : (
            <a className='signin' href="/FacaoLogin">Entrar</a>
          )
        }
      </header>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/ListadeProdutos' exact element={<ListadeProdutos />}></Route>
        <Route path='/CriarProduto' exact element={<CriarProduto />}></Route>
        <Route path='/Produto/:id' exact element={<ProductScreen />}></Route>
        <Route path='/EditarProduto/:id' exact element={<EditarProduto />}></Route>
        <Route path='/CriarConta' exact element={<CriarUsuario />}></Route>
        <Route path='/FacaoLogin' exact element={<FazerLogin />}></Route>
      </Routes>
      <footer>
        <BiCopyright />
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
