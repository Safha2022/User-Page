import { Routes, Route } from 'react-router-dom';
import Book from './components/Books/Book';
import Home from './components/Home/Home';
import './App.css';
import Signup from './components/Signup/SignUp';
import Reviews from './components/Reviews/Reviews';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/books' element={<Book />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/categories' element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
