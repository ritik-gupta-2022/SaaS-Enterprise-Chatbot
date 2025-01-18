import {BrowserRouter, Routes , Route} from 'react-router-dom'
import SignIn from './pages/Signin.jsx'
import SignUp from './pages/SignUp.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import OnlyUserPrivateRoute from './components/shared/OnlyUserPrivateRoute.jsx';
import Home from './components/shared/Home.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>  
          <Route path='/' element={<Home/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          
          <Route path='' element={<OnlyUserPrivateRoute/>}>
            <Route path='/dashboard' element={<Dashboard/>} />
          </Route>

          
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App