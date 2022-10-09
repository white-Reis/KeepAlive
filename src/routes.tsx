import { Routes, Route } from 'react-router-dom';
import { LoginProvider } from './context/Login';
import { RegisterProvider } from './context/Registration';
import Login from './pages/Login';
import Home from './pages/Home';
import Registration from './pages/Registration';

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RegisterProvider>
            <LoginProvider>
              <Login />
            </LoginProvider>
          </RegisterProvider>
        }
      ></Route>
      <Route
        path="/registration"
        element={
          <RegisterProvider>
            <LoginProvider>
              <Registration />
            </LoginProvider>
          </RegisterProvider>
        }
      ></Route>
      <Route
        path="/home"
        element={
          <RegisterProvider>
            <LoginProvider>
              <Home />
            </LoginProvider>
          </RegisterProvider>
        }
      ></Route>
    </Routes>
  );
}
