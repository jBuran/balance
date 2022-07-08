import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components'

import { Home, Login, Signup } from './pages'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>


    </div>
  )
}

export default App
