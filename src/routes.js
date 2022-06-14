import { BrowserRouter as Router } from "react-router-dom"
import { AnimatedRoutes } from "./components/AnimatedRoutes"
import { SideBar } from "./components/SideBar"

export const RouterController = () => {
    return (
        <Router>
            <SideBar />
            <AnimatedRoutes />
        </Router>
    )
}