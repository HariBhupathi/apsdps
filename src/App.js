import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoute from './components/AppRoute';
import LoginForm from './components/LoginForm'
import PageNotFound from './components/PageNotFound'
import {Context} from './context/Context'
import './App.css';
import LoadingSpinner from './components/LoadingSpinner';


const App = () => {  

  const[loading, setLoading]=useState(true)

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setLoading(false)
    },300)
    return ()=>clearTimeout(timer)
  },[])

  return (
    <Context> 
      {loading ? <LoadingSpinner/> :
      <Router>
        <Routes>              
          <Route path="/login" element={<LoginForm loading={loading} setLoading={setLoading} />} />              
          <Route path="/*" element={<AppRoute />} />           
        </Routes>
      </Router>
      }
    </Context>
  )
}

export default App