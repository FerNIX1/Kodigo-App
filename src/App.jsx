import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage } from "./pages/LoginPage";
import { RegistroPage } from "./pages/RegisterPage";
import { HomePage } from './pages/HomePage'
import "bootstrap/dist/css/bootstrap.min.css"
import { NotFoundPage } from "./pages/NotFoundPage";

import { UserPage } from "./pages/UserPage";
import { FormPage } from './pages/FormPage';
import { FSJPage } from './pages/FSJPage';
import { DataAnalystJrPage } from './pages/DataAnalystJrPage';
import { PythonPage } from './pages/PythonPage';
import { JavaPage } from './pages/JavaPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Registro" element={<RegistroPage />} />
        <Route path="/FullStackJunior" element={<FSJPage />} />
        <Route path="/DataAnalystJunior" element={<DataAnalystJrPage />} />
        <Route path="/welcome" element={<UserPage />} />
        <Route path="/PythonDeveloper" element={<PythonPage />} />
        <Route path="/JavaDeveloper" element={<JavaPage />} />
        <Route path="/inscripcion-Bootcamp" element={<FormPage />} />
        <Route path="/*" element={<NotFoundPage />} />
    
      </Routes>
    </Router>
  );
}

export default App;
