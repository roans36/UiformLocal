import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import About from './pages/About'
import NotFound from './pages/NotFound'
import RootLayOut from './components/RootLayOut'
import AddForm from './components/AddForm'
import UpdateForm from './components/UpdateForm'

const App = () => {


  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayOut />} >
          <Route index element={<HomePage />} />
          <Route path='add-daily' element={<AddForm />} />
          <Route path='update/:id' element={<UpdateForm />} />
          <Route path='about-page' element={<About />} />
          <Route path='*' element={<NotFound />} />

        </Route>

      </Routes>
    </>
  )
}

export default App
