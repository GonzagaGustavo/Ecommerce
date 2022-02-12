import './App.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiCopyright } from 'react-icons/bi'
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <header>
        <a href="/">Inicio</a>
        <a href="/Produtos">Produtos</a>
        <a href="/Coleçoes">Coleções</a>
        <a href="/Cart"><AiOutlineShoppingCart className='cart-icon'/></a>
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <BiCopyright />
      </footer>
    </div>
  );
}

export default App;
