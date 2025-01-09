import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookView from './components/BookView';
import BooksForm from './components/BooksForm';
import BookSearch from './components/BookSearch';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<BooksForm/>} />
        <Route path="search" element={<BookSearch/>}/>
        <Route path="view" element={<BookView/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
