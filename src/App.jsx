
/* import './App.css' */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegistroPage } from "./pages/RegisterPage";
import { HomePage } from './pages/HomePage'
import "bootstrap/dist/css/bootstrap.min.css"
import { FSJ } from "./components/bootcamps/FSJ/FSJ";
import { DataAnalystJr } from "./components/bootcamps/DAJ/DataAnalystJr";
import { Python } from "./components/bootcamps/python/Python";
import { Java } from "./components/bootcamps/java/Java";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Form } from "./components/Form/Form";
function App() {

  const Router=createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path:"/login",element:<LoginPage></LoginPage>},
    {path:"/Registro",element:<RegistroPage></RegistroPage>},
    {path:"/FullStackJunior", element: <FSJ/>},
    {path:"/DataAnalystJunior", element: <DataAnalystJr></DataAnalystJr>},
    {path:"/PythonDeveloper", element: <Python/>}, 
    {path:"/JavaDeveloper", element: <Java/>},
    {path:"/*", element: <NotFoundPage/>},
    {path:"/incripcion-Bootcamp", element: <Form></Form>}

   ]);

  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  )
}

export default App
