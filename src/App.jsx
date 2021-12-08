import './App.css';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './components/Success';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

function App() {
  const user = true;
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/:category" element={<ProductList/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/login" element={<Login/>}>
            {user ? <Route path ="*" element={<Navigate to ="/" />}/> : <Login/>}
          </Route>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
  );
};

export default App;
