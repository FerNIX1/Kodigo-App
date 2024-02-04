
/* import './App.css' */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegistroPage } from "./pages/RegisterPage";
import { HomePage } from './pages/HomePage'
import "bootstrap/dist/css/bootstrap.min.css"
import { FSJ } from "./components/bootcamps/FSJ/FSJ";
import { DataAnalystJr } from "./components/bootcamps/DAJ/DataAnalystJr";
import coaches from "./pages/Coaches";
import { cdp } from "./pages/Cdp";
import { faqs } from "./pages/Faqs";
function App() {

  const Router=createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path:"/login",element:<LoginPage></LoginPage>},
    {path:"/Registro",element:<RegistroPage></RegistroPage>},
    {path:"/FullStackJunior", element: <FSJ/>},
    {path:"/DataAnalystJunior", element: <DataAnalystJr></DataAnalystJr>},
    {path: "/coaches", element: <coaches /> },
    {path: "/cpd", element: <cpd></cpd>},
    {path: "/faqs", element: <faqs></faqs>},
   ]);

  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  )
}

export default App
