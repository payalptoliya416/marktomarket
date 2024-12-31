import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './component/home/HomePage'
import Navbar from './component/navbar/Navbar'
import Profile from './component/profile/Profile';

function App() {

  const [profile,setProfile] = useState(false);

  const handleProfile = ()=>{
    setProfile(!profile);
  }
  const handleProfileFalse = ()=>{
    setProfile(false);
  }
  return (
    <>
      <BrowserRouter>
      <Navbar handleProfile={handleProfile} handleProfileFalse={handleProfileFalse}/>
      <Routes>       
      <Route
            exact
            path='/'
            element={
              profile ? (
                <Profile />
              ) : (
                <HomePage handleProfile={handleProfile} />
              )
            }
          />
       
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
