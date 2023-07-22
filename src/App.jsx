import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './AppLayout'
import { ContextProvider } from './Context'
import Page from './Page'

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/:id" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
