import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage } from "./pages/LoginPage";
import { RegistroPage } from "./pages/RegisterPage";
import { HomePage } from './pages/HomePage'
import "bootstrap/dist/css/bootstrap.min.css"
import { FSJ } from "./components/bootcamps/FSJ/FSJ";
import { DataAnalystJr } from "./components/bootcamps/DAJ/DataAnalystJr";
import { UserPage } from "./pages/UserPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Registro" element={<RegistroPage />} />
        <Route path="/FullStackJunior" element={<FSJ />} />
        <Route path="/DataAnalystJunior" element={<DataAnalystJr />} />
        <Route path="/welcome" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
