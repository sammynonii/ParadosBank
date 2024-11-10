import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Shared/Layout'
import Home from './Components/Home/Home'
import Career from './Components/Career/Career'
import About from './Components/About/About'
import Security from './Components/Security/Security'
import Signup from './Components/SignUp/Signup'
import Login from './Components/Login/Login'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/career' element={<Career />} />
            <Route path='/about' element={<About />} />
            <Route path='/security' element={<Security />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
