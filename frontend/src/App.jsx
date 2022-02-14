import './App.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiCopyright } from 'react-icons/bi'
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListadeProdutos from './Components/ListadeProdutos';
import CriarProduto from './Components/CriarProduto';
import ProductScreen from './Components/ProductScreen';
import EditarProduto from './Components/EditarProduto';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <a href="/">Inicio</a>
        <a href="/ListadeProdutos">Produtos</a>
        <a href="/Coleçoes">Coleções</a>
        <a href="/Cart"><AiOutlineShoppingCart className='cart-icon'/></a>
      </header>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/ListadeProdutos' exact element={<ListadeProdutos />}></Route>
        <Route path='/CriarProduto' exact element={<CriarProduto />}></Route>
        <Route path='/Produto/:id' exact element={<ProductScreen />}></Route>
        <Route path='/EditarProduto/:id' exact element={<EditarProduto />}></Route>
      </Routes>
      <footer>
        <BiCopyright />
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
