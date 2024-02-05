
import { Navbar } from '../components/Navbar/Navbar';
import { Welcome } from '../components/welcome/Welcome.jsx'; // <-- Corregir nombre aquí
export const UserPage = () => {
 
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Welcome />
        </div>
      </div>
    </div>
  );
};
