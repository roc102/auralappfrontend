import './App.css';
import Mentor from './Components/mentor';
import Navbar from './Navbar'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Components/SignIn';
import SignUp from './Components/SignUp';
import Admin from './Components/Admin';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
