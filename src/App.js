import './App.css';

import Home from './Components/Home';
import Login from './Components/Login';
import FileUpload from './Components/FileUpload';
import BookDetails from './Components/BookDetails';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from './Components/Carousel';
import CarouselNpm from './Components/CarouselNpm';
import UserHome from './Components/UserHome';
import AdminForm from './Components/adminForm';

function App() {
  return (
    <div className="App">
      <AdminForm/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<UserHome/>}/>
          <Route path="/book" element={<BookDetails />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
