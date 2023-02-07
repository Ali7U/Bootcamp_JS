import React from 'react'
import InterFace from './InterFace'
import {Routes, Route} from 'react-router-dom'
import Login from './Login'

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InterFace />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Router
