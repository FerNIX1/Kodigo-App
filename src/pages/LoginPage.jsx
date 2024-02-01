
import { Login } from "../components/Login/Login"
import { Navbar } from "../components/Navbar/Navbar"
export const LoginPage = () => {
  return (
    <>
     <div className="bg-login">
    <Navbar></Navbar>
    <Login></Login>
    </div>
    </>
  )
}
