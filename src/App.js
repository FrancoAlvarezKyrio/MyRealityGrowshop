import { BrowserRouter, Routes , Route } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';
import ItemListContainer from './containers/ItemListContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import './Styles.scss'
import Cart from './containers/Cart';
import CartProvider from './contexts/CartContext'
import { ToastContainer } from 'react-toastify';
import Header from './components/Banner';
import Contact from './components/Contact';

const App = () => {
    return (
        <Auth0Provider domain='dev-hcaa4woz.us.auth0.com' clientId='fdjrZfArt8fVd71YVKhAX2OofQxqlUbB' redirectUri={window.location.origin}>
          <CartProvider id="body">
            <BrowserRouter>
                <NavBar/>
                <Header/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer/>} />
                        <Route path="/cat/:id" element={<ItemListContainer/>} />
                        <Route path="/item/:id" element={<ItemDetailContainer/>} />    
                        <Route path="/cart" element={<Cart/>} />
                        <Route path="/contact" element={<Contact/>} />
                    </Routes>
                <Footer/> 
                <ToastContainer autoClose={2000}/>
            </BrowserRouter>
          </CartProvider>
        </Auth0Provider>
    ); 
};

export default App;