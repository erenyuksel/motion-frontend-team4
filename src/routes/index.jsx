import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login"

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Router