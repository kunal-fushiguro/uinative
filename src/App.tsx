import { Routes, Route } from "react-router-dom"
import HomeScreen from "./pages/HomeScreen"
import ComponentScreen from "./pages/ComponentScreen"
import ComponentPage from "./pages/ComponentPage.tsx"

const App = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Routes>
                <Route
                    Component={HomeScreen}
                    path="/"
                />
                <Route
                    Component={ComponentScreen}
                    path="/components"
                />
                <Route
                    Component={ComponentPage}
                    path="/component/:id"
                />
            </Routes>
        </>
    )
}

export default App

