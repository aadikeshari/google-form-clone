import React from 'react'
import Form from './components/Form'
import { Route, Routes } from 'react-router-dom'
import Submit from './components/Submit'

function App() {
  return (
   <Routes>
    <Route path="/" element={<Form/>}/>
    <Route path='/submitted' element={<Submit/>}/> :
   </Routes>
  )
}

export default App