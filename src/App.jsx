import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { HomePage } from './pages/home';
import { PortfolioPage } from './pages/portfolio';
import { BookingPage } from './pages/booking';
import { ShopPage } from './pages/shop';
import { LoginPage } from './pages/login';
import { SigninPage } from './pages/signin';
import { UserDataPage } from './pages/user-data';
import { NavigationMenu } from './components/nav/nav';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <NavigationMenu isLoggedIn={isLoggedIn} />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/user-data" element={<UserDataPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
