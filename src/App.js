import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import Nav from "./components/Nav";
//import MovieDetail from "./pages/MovieDetail";
//import TheAthlete from './pages/TheAthlete';
//Router
import { Route, Routes, useLocation } from 'react-router-dom';
//import MovieDetail from "./pages/MovieDetail";
//Animation
import { AnimatePresence } from 'framer-motion';
import Volunteer from './pages/Volunteer';
import MassActions from "./pages/MassActions";
import Winners from "./pages/Winners";
//import Footer from "./components/Footer";

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<AboutUs />}>
          {/* <AboutUs /> */}
        </Route>
        <Route path='/work' exact element={<OurWork />}>
          {/* <OurWork /> */}
        </Route>
        {/* <Route path="/work/:id" element={<MovieDetail />}>
        </Route> */}
        <Route path="/work/volunteer" element={<Volunteer />}>
        </Route>
        <Route path="/work/massactions" element={<MassActions />}>
        </Route>
        <Route path="work/winners" element={<Winners />}>
        </Route>
        <Route path='/contact' element={<ContactUs />}>
          {/* <ContactUs /> */}
        </Route> 
      </Routes>
      </AnimatePresence>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
