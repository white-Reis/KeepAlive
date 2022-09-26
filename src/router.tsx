import { Routes, Route } from 'react-router-dom';
import { LoginProvider } from './common/context/Login';
import Login from './pages/Login';
import Home from './pages/Home';

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LoginProvider>
            <Login />
          </LoginProvider>
        }
      ></Route>
      <Route
        path="/home"
        element={
          <LoginProvider>
            <Home />
          </LoginProvider>
        }
      ></Route>
    </Routes>
  );
}
