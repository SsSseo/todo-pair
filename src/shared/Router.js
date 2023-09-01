import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import Detail from "../pages/Detail"

import React from 'react'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/:id" element = {<Detail/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router