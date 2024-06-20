import logo from './logo.svg';
import "./scss/style.scss";
import './App.css';

import { lazy,Suspense } from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
const Login = lazy(()=> import('./components/login'))
const SignUp = lazy(()=> import('./components/signup/SignUp'));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={'loading...'}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
