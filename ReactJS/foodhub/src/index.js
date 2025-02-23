import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContactUs from './pages/ContactUs';
import { BrowserRouter , Routes  ,Route } from 'react-router-dom';
import Order from './pages/Order';
import Blog from './pages/Blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="Order" element={<Order />} />
        <Route path="Blog" element={<Blog />} />
      </Routes>
</BrowserRouter>  
    </React.StrictMode>
);

reportWebVitals();
