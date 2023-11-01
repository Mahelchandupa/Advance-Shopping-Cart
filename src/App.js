import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import SingleProduct from './pages/SingleProduct/SingleProduct';

function App() {

 

  return (
      <BrowserRouter>
        <Header />
        <div className='App'>
          <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/cart' element={<Cart/>}></Route>
             <Route path='/singleproduct/:id' element={<SingleProduct/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
