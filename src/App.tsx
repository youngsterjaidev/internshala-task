import React, { FC } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Router } from "@reach/router"

interface HomeProps {
    path?: string
}

const Home: FC<HomeProps> = () => {
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