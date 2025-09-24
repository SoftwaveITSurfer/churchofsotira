import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Schedule from './pages/Schedule'
import CatecheticalMeetings from './pages/CatecheticalMeetings'
import Gallery from './pages/Gallery'

function App() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box flex="1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/catechetical" element={<CatecheticalMeetings />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
