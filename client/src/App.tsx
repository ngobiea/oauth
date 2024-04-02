import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ShopifyPage from './pages/ShopifyPage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';
import FacebookPage from './pages/FacebookPage';
import LinkedInPage from './pages/LinkedinPage';
import GooglePage from './pages/GooglePage';
import PinterestPage from './pages/PinterestPage';
import FacebookForm from './pages/FacebookForm';
import ShopifyForm from './pages/ShopifyForm';
import FacebookAdsPage from './pages/FacebookAdsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/shopify' element={<ShopifyPage />}>
        <Route path='' element={<ProductPage />} />
        <Route path='orders' element={<OrderPage />} />
        <Route path='form' element={<ShopifyForm />} />
      </Route>
      <Route path='/facebook' element={<FacebookPage />} >
        <Route path='' element={<FacebookAdsPage />} />
        <Route path='form' element={<FacebookForm />} />
      </Route>
      <Route path='/linkedin' element={<LinkedInPage />} />
      <Route path='/google' element={<GooglePage />} />
      <Route path='/pinterest' element={<PinterestPage />} />
    </Routes>
  );
}

export default App;
