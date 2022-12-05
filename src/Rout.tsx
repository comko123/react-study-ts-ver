import { Routes, Route } from "react-router-dom"
import MainPage from "./MainPage"
const Rout = () => {
return<><Routes>
<Route path="/" element={<MainPage/>}/>
</Routes></>}
export default Rout