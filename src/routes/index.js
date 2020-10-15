import React from 'react'
import LoginPage from '../pages/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<LoginPage/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
