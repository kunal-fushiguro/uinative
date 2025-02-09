import { Routes, Route } from "react-router-dom"
import HomeScreen from "./pages/HomeScreen"

const App = () => {
    return (
        <>
            <Routes>
                <Route
                    Component={HomeScreen}
                    path="/"
                />
            </Routes>
        </>
    )
}

export default App

