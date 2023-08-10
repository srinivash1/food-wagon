import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import RestaurantDetails from './components/RestaurantDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App font-mono">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Body />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/restaurantdetails/:id' element={<RestaurantDetails />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
