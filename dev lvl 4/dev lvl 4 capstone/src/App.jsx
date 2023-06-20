import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NPCList from './components/NPCList'
import NPCDetails from './components/NPCDetails'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<Home className='home'/>} />
        <Route path='/about' element={<About />} />
        <Route path='/npclist' element={<NPCList />} />
        <Route path='/npclist/:npcID' element={<NPCDetails />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App