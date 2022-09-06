import React, { FC, useState, useEffect } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Link, Router } from "@reach/router"
import { Container } from "@mui/system"
import { CardHeader, Drawer, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import axios from "axios"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "styled-components"

const blogTypes = ['Tech', 'Entertainment', 'Community']

const BlogLink = styled(Link)`
    color: #000;
    padding: 0.5em 1em;
    text-decoration: none;
    font-weight: 600;
    border: 2px solid #ddd;
    border-radius: 1em;

    &:hover {
        background: #ddd;
        color: #fff;
    }
`

const blogService = {
    fetchBlogs: async () => {
        try {
            const res = await axios.get("/.netlify/functions/hello")
            console.log(res)
            return res.data
        } catch (e) {
            console.log("Error Occured while fetching the blogs fetchBlogs fn ", e)
        }
    },
    addBlog: async (title: string, desc: string, image: string) => {
        try {
            const res = await axios.post("/.netlify/functions/hello", {
                title,
                desc,
                image
            })

            console.log(res)
            return res.data
        } catch (e) {
            console.log("Error occured while adding the blog addBlog fn : ", e)
        }
    }
}

const Navbar = () => {
    return (
        <nav>
            <div>Belog</div>
            <div></div>
        </nav>
    )
}

interface BlogProps {
    id?: number,
    image: string,
    title: string,
    desc: string
}

const BlogCard: FC<BlogProps> = ({ image, title, desc }) => {
    return (
        <Card sx={{ minWidth: 250 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

const Sidebar = () => {
    return (
        <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Drawer
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: "border-box"
                    }
                }}
                variant="permanent"
                anchor="top"
            >
                {blogTypes.map((blogType) => (
                    <ListItem key={blogType} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={blogType} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </Drawer>

        </Container>
    )
}

interface HomeProps {
    path?: string
}

const Home: FC<HomeProps> = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        blogService.fetchBlogs().then(data => {
            setBlogs(data)
        })
    }, [])

    return (
        <>
            <Container sx={{ padding: "3rem 1rem" }}>
                <h1 style={{ textAlign: "center" }}>Belog</h1>
                <Grid container direction="row" spacing={1} justifyContent="center">
                    {blogTypes.map(blogType => (
                        <Grid item>
                            <BlogLink to="/">{blogType}</BlogLink>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Grid sx={{ padding: "0.5rem" }} container direction="row" spacing={4} justifyContent="center">
                {blogs.map(blog => (
                    <Grid item sx={{ flexShrink: 0, flexGrow: 1 }}>
                        <BlogCard {...blog} />
                    </Grid>
                ))}
            </Grid>
            {/* <Sidebar /> */}
        </>
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