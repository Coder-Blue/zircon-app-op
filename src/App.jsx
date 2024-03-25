import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserAuthContextProvider } from "./api/UserAuthContext";
import PrivateRoute from "./api/PrivateRoute";
import Login from "./pages/Login";
import Phone from "./pages/Phone";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import Dictionary from "./pages/Dictionary";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <UserAuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/dictionary"
            element={
              <PrivateRoute>
                <Dictionary />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <AboutUs />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </UserAuthContextProvider>
  );
}

export default App;
