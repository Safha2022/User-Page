import { Routes, Route } from 'react-router-dom';
import Book from './components/Books/Book';
import Home from './components/home/Home';
import './App.css';
import Signup from './components/screans/signup/SignUp';
import Reviews from './components/reviews/Reviews';
import Categories from './components/categories/Categories';

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
