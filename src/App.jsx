import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import Edit from './pages/Edit';


function App() {
  return (
    <div className='h-screen bg-white dark:bg-slate-900'>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/home" exact element={<Home/>} />
        {/* <Route  path="/users/:id" exact element={<Users/>} /> */}
        <Route  path="/add-user" exact element={<Add/>} />
        <Route  path="/edit-user/:id" exact element={<Edit/>} />
      </Routes>
    </div>
  )
}

export default App
