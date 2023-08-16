import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "react-router-dom"
import Home from './Components/Home'
import ContactUs from './Components/Contact'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Navbar from './Components/Header'
import Footer from './Components/Footer'
import Migraine from './Components/Conditions/Migraine'
import Allergy from './Components/Conditions/Allergy'
import HIV from './Components/Conditions/HIV'
import Cancer from './Components/Conditions/Cancer'
import Fever from './Components/Conditions/Fever'
import Task from './Components/Task'
import TeenHealth from './Components/Wellbeing/TeenHealth'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App(){
    return(
      <>
        <BrowserRouter>
        <Navbar></Navbar>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/migraine' element={<Migraine/>}/>
            <Route path='/allergy' element={<Allergy/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/task' element={<Task/>}/>
            <Route path="/cancer" element={<Cancer/>} />
        <Route path="/hiv" element={<HIV/>}/>
        <Route path="/fever" element={<Fever/>} />
        <Route path="/teenhealth" element={<TeenHealth/>} />
       
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </>
    )
}

export default App;