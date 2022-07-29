import React from "react"
import { Home } from "../../pages/Home"
import { Portfolio } from "../../pages/Portfolio"
import { ComingSoon } from "../../pages/Soon"
import { Route, Routes, useLocation } from "react-router-dom"

import {AnimatePresence} from "framer-motion"

export const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" exact element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<ComingSoon />} />
            </Routes>
        </AnimatePresence>
    )
}