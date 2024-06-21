import logo from './logo.svg';
import "./scss/style.scss";
import './App.css';

import { lazy,Suspense } from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
const Login = lazy(()=> import('./components/login'))
const SignUp = lazy(()=> import('./components/signup/SignUp'));
const PassWord = lazy(()=> import('./components/signup/PassWord'));
const Gender = lazy(()=> import('./components/signup/Gender'));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={'loading...'}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup/1' element={<SignUp/>}/>
          <Route path='/signup/3' element={<PassWord/>}/>
          <Route path='/signup/4' element={<Gender/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
