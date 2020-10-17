import React from 'react'
import LoginPage from '../pages/login'
import Main from '../pages/main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<LoginPage/>}>
        </Route>
        <Route path='main' element={<Main/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
