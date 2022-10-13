import "./App.css";
import Home from "./pages/Home/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appointment from "./pages/Appointment/Appointment/Appoinment";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="home" element={<Home />} />

            <Route element={<PrivateRoute />}>
              <Route path="appointment" element={<Appointment />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}
export default App;
