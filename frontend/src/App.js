import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Register from './components/Register';
import LogIn from './components/LogIn';
import Profile from './components/Profile';
import { Routes, Route } from 'react-router-dom'

function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<LogIn />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
