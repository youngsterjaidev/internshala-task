import React from "react"
import { Router } from "@reach/router"
import { Login, Home, Register } from "./pages"

// Hooks
import { useLocalStorage } from "./utils/hooks"

const App = () => {

    return (
        <div>
            <Router>
                <Login path="/login" />
                <Register path="/register" />
                <Home path="/" />
            </Router>
        </div>
    )
}

export default App