import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "styled-components";
import Home from './pages/Home';
import Details from './pages/Details'
import HotelList from "./pages/HotelList";
import { useState } from 'react';
import { DarkTheme, LightTheme } from "./styled";
import Header from "./components/Header";
import 'antd/dist/antd.css';
import 'swiper/swiper.min.css';
import FooterCard from "./components/MyComponents/FooterCard";
import Payment from "./pages/Payment";
import Congrat from "./pages/Congrat";

const App = () => {
 const [theme, toggleTheme] = useState('light');

 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <div className="App">
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
            </Routes>

            <Routes>
              <Route path='/details' element={<Details/>}/>
            </Routes>

            <Routes>
              <Route path='/list' element={<HotelList/>}/>
            </Routes>

            <Routes>
              <Route path='/payment' element={<Payment/>}/>
            </Routes>

            <Routes>
              <Route path='/congrat' element={<Congrat/>}/>
            </Routes>

            <FooterCard/>
            
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
    
  );
}

export default App;
