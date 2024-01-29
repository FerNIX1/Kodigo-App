
/* import './App.css' */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/Logueo";
import { RegistroPage } from "./pages/RegistrarUser";
import "bootstrap/dist/css/bootstrap.min.css"
function App() {

  const Router=createBrowserRouter([
    {path:"/login",element:<LoginPage></LoginPage>},
    {path:"/Registro",element:<RegistroPage></RegistroPage>}
   ]);

  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  )
}

export default App
