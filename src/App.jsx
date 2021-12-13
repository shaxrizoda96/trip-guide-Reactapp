import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "styled-components";
import Home from './pages/Home';
import Details from './pages/Details'
import HotelList from "./pages/HotelList";
import { Suspense, useState } from 'react';
import { DarkTheme, LightTheme } from "./styled";
import Header from "./components/Header";
import 'antd/dist/antd.css';
import 'swiper/swiper.min.css';
import Footer from "./components/Footer";
import Payment from "./pages/Payment";
import Congrat from "./pages/Congrat";
import Subscribe from "./components/Subscribe";
import NotFound from "./pages/NotFound";


const App = () => {

 const [theme, toggleTheme] = useState('light');

 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <div className="App">
          <BrowserRouter>
          <Suspense fallback= "loading">
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/details' element={<Details/>}/>
              <Route path='/list/:id' element={<HotelList/>}/>
              <Route path='/payment' element={<Payment/>}/>
              <Route path='/congrat' element={<Congrat/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
            </Suspense>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
    
  );
}

export default App;
