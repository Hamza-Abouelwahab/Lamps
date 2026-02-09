import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ContentAbout from './pages/about'
import { MyProvider } from './context'



function App() {

  return (
    <>
    
      <MyProvider>


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<ContentAbout/>}/>
      </Routes>
      
      </MyProvider>
    
    </>
  )
}
export default App
