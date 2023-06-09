import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home';
import { PortfolioPage } from './pages/portfolio';
import { BookingPage } from './pages/booking';
import { ShopPage } from './pages/shop';
import { LoginPage } from './pages/login';
import { SigninPage } from './pages/signin';
import { UserDataPage } from './pages/user-data';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <HomePage/> } />
        <Route path="/portfolio" element={ <PortfolioPage/> } />
        <Route path="/booking" element={ <BookingPage/> } />
        <Route path="/shop" element={ <ShopPage/> } />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/signin" element={ <SigninPage/> } />
        <Route path="/user-data" element={ <UserDataPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
