import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grandpa from './components/Grandpa/Grandpa';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrdersReview from './components/OrdersReview/OrdersReview';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/index' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/ordersreview' element={<OrdersReview />} />
        <Route path='/grandpa' element={<Grandpa />} />
      </Routes>
    </div>
  );
}

export default App;
