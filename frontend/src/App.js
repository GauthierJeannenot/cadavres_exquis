import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import LogIn from './components/LogIn';
import Profile from './components/Profile';
import { Routes, Route } from 'react-router-dom'

function App() {



  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/profile/:id' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
