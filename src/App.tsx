import React from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Link } from "@reach/router"
import { height } from "@mui/system"
import { CardHeader, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import styled from "styled-components"
import { Home } from "./Home"

export const blogTypes = [
    {
        url: 'tech',
        type: 'Tech'
    }, {
        url: 'entertainment',
        type: 'Entertainment'
    }, {
        url: 'community',
        type: 'Community'
    }]

export const BlogLink = styled(Link)`
    color: hsla(0, 0%, 35%, 1);
    padding: 0.5em 1em;
    text-decoration: none;
    font-weight: 600;
    border: 2px solid hsla(0, 0%, 35%, 1);
    border-radius: 0.3em;
    transition: background 0.1s ease-in;

    &:hover {
        background: #000;
        color: #fff;
        border: 2px solid #000;
    }
`

const Main = () => {
    return (
        <Home />
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