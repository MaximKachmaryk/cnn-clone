import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './comonents/Navbar/Nav';
import Cards from './comonents/cards/Cards';

import './App.css';
import More from './comonents/More/More';
import Health from './comonents/Health/Health';
import US from './comonents/USPolitice/USpol';
/* import World from './comonents/World/world'; */


function App() {
  return (<div>
    <BrowserRouter> 
     <Navbar />
      {/* <Cards /> */}

      <Routes>
        <Route path="/" component={<App />}>

          <Route path="world" element={<Cards/>} />
          <Route path="more" element={<More/>} />
          <Route path="health" element={<Health/>} />
          <Route path="uspoitise" element={<US/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  </div>
  );
}

export default App;
