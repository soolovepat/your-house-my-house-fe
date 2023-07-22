import { BrowserRouter, Route, Routes } from "react-router-dom"
import Writepage from "../page/writepage"



const Router = ()=>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/write" element={<Writepage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router