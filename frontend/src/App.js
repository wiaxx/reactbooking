import './App.css';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import ServicesTwo from './pages/ServicesTwo';
import Bookings from './pages/Bookings';
import MyPage from './pages/MyPage';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services2' element={<ServicesTwo />} />
        <Route path='/mybookings' element={<Bookings />} />
        <Route path='/mypage' element={<MyPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
