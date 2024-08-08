import './App.css'
import Layout from './components/Layout';
import { UserContextProvider } from './components/UserContext';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import {Route,Routes} from "react-router-dom";

function App() {
  return (

    <UserContextProvider>
        <Routes>
          <Route path='/' element={
            <Layout />
          }>

            <Route index element={
                    <IndexPage />
                  } />

            <Route path={'/login'} element={
                <LoginPage />
            } />

            <Route path={'/register'} element={
              <RegisterPage />
            } />
          </Route>

      </Routes>
    </UserContextProvider>
    
  )
}

export default App
