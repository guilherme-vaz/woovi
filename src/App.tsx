import { Home } from "./components/Home/Home"
import { Routes, Route } from 'react-router-dom'
import { PixPage } from "./components/PixPage/PixPage"
import { LastPage } from "./components/LastPage/LastPage"
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pix' element={<PixPage />} />
        <Route path='/last' element={<LastPage />} />
      </Routes>
    </>
  )
}

export default App
