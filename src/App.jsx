import { useState } from 'react'

import './App.css'
import Login from './Pages/Login';
import Register from './Pages/Register';
import PrivateRoute from './privateRoute';


import GoldCalculationTextBox from './components/GoldCalculation/GoldCalculationTextBox';
import { BrowserRouter,Route,Routes,Router,Link,Navigate} from 'react-router-dom';

function App() {
  return (
    <>    
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<PrivateRoute element={ <GoldCalculationTextBox />} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
