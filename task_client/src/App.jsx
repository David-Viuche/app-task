import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/tasks' element={<h1>Home tasks</h1>} />
        <Route path='/add-task' element={<h1>Home dd-task</h1>} />
        <Route path='/task/:id' element={<h1>Home update task/:id</h1>} />
        <Route path='/profile' element={<h1>Home profile</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App