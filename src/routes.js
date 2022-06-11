import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";

export const RouterController = () => {
    return (
        <>
            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>
        </>
    )
}