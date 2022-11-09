import { Routes, Route } from 'react-router-dom';
import Book from './components/Books/Book';
import Home from './components/home/Home';
import './App.css';
import Signup from './components/screans/signup/SignUp';
import Reviews from './components/reviews/Reviews';
import Categories from './components/categories/Categories';
import About from './components/about/About';
import Footer from './components/footer/Footer'
import HomeTry from './components/homeTry/HomeTry';

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/try' element={<HomeTry />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/books' element={<Book />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/about' element={<About />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
