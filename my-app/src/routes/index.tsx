import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../page/Home'
import { Login } from '../page/Login'



const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default Rotas