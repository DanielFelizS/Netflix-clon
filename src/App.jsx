import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import {Home} from "./pages/home";
export const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  )
}
