import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import SharedLayout from "./components/SharedLayout";
import { Routes, Route } from 'react-router-dom'
import Products from "./components/Products";
import SharedProducts from "./components/SharedProducts";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from 'react'

function App() {
  const [user, setUser] = useState('');
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path="/Products/:productId" element={<SharedProducts/>}/>
          <Route path='/Login' element={<Login setUser={setUser}/>}/>
          <Route path='/Dashboard' element={
            <ProtectedRoute user={user}>
              <Dashboard user={user}/>
            </ProtectedRoute>
          }/>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
