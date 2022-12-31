import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import About from './component/About/About';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home'
import NotFound from './component/NotFound/NotFound';
import Products from './component/Products/Products';
import ShoppingCartIcon from './component/ShoppingCartIcon/ShoppingCartIcon';
import Category from './component/Category/Category';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path ='/category/:categorySlug' element={<Category></Category>}></Route>
        <Route path='/shoppingcart' element={<ShoppingCartIcon></ShoppingCartIcon>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
