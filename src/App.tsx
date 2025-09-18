import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Contact from './pages/Contact'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
