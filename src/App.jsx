import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import { MyProvider } from './context'



function App() {

  return (
    <>
    
      <MyProvider>


      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      
      </MyProvider>
    
    </>
  )
}
export default App
