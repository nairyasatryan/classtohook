import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Components from './Components';
import Hook from './Hook';


function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route  path = '/' element ={<Components />}/>
     <Route path ='/hook' element={<Hook />} />
     </Routes> 
      </BrowserRouter>
  )
}

export default App