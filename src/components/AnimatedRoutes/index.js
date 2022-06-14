import React from "react"
import { Home } from "../../pages/Home"
import { Route, Routes, useLocation } from "react-router-dom"

import {AnimatePresence} from "framer-motion"

export const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" exact element={<Home />} />
            </Routes>
        </AnimatePresence>
    )
}