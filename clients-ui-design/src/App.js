import React from 'react'
import './App.css';
import Home from './pages/Home'
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route,Redirect } from "react-router-dom";
import Success from './pages/Success';
import { useSelector } from 'react-redux';




function App() {
  const user = useSelector(state=>state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path ="/" element = {<Home/>}/>
        <Route exact path="/products/:category" element={<ProductList/>} />
        <Route exact path="/product/:id" element={<Product/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route path='/success' element={<Success/>}/>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App; 
