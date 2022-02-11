import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import ServicesTwo from './pages/ServicesTwo';
import MyBookings from './pages/MyBookings';
import MyPage from './pages/MyPage';
import Footer from './Footer';
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services/hairdresser' element={<Services />} />
        <Route path='/services/beauty' element={<ServicesTwo />} />
        <Route path='/mybookings' element={<MyBookings />} />
        <Route path='/mypage' element={<MyPage />} >
          <Route path='/mypage/createaccount' element={<CreateAccount />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
