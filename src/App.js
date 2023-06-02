import React from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/feedbackdata'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/Feedbackform'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/aboutIconLink'
import Post from './components/Post'
import { FeedBackprovider } from './context/FeedbackContext'
function App() {
  return (
    <FeedBackprovider>
    <Router>
      <div className='container'>
        <Routes>
        <Route path='/' element={
          <>
          <Header text='FEEDBACK UI' />
          <FeedbackForm/>
          <FeedbackStats/>
          <FeedbackList/>
          </>
        }>
          
        </Route>
        <Route path='/about' element={<AboutPage/>} />
        {/* <Route path="/post/:id" element={<Post/>}></Route> */}
        <Route path="/post/*" element={<Post/>}></Route>
        </Routes>
      </div>
      <AboutIconLink/>
    </Router>
    </FeedBackprovider>
  )
}

export default App
