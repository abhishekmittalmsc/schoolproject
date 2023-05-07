import React, { useState, useEffect } from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material'
import Login from './components/SchoolLogin/SchoolLogin';
import SchoolRegistration from './components/SchoolLogin/newschoolregistration/NewSchoolRegistration';

import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = () => {
  const theme = createTheme();

  return (
    <div className="App">
       <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/newschoolregistration" element={<SchoolRegistration/>} />
          
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
