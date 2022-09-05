import React from "react"
import { createTheme, ThemeProvider } from "@mui/materials/styles"
import { Home } from "@reach/router"

const Home = () => {
    return (
        <div>Home</div>
    )
}

const Main = () => {
    return (
        <Router>
            <Home path="/" />
        </Router>
    )
}

const theme = createTheme()

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Main />
        </ThemeProvider>
    )
}

export default App