import React, { FC, useState, useEffect } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Link, Router, useLocation, useParams } from "@reach/router"
import { Container } from "@mui/system"
import { CardHeader, Drawer, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import axios from "axios"
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "styled-components"

const blogTypes = [
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
    },
    findBlog: async (blogId: number | null, blogType: string | null) => {
        try {
            let res;
            if (blogId) {
                res = await axios({
                    url: "/.netlify/functions/hello",
                    params: JSON.stringify({
                        blogId,
                    }),
                    method: "GET"
                })
            } else {
                res = await axios({
                    url: "/.netlify/functions/hello",
                    params: JSON.stringify({
                        blogType
                    }),
                    method: "GET"
                })
            }

            console.log(res)
            return res.data
        } catch (e) {
            console.log("Error occured while find the blog findBlog fn : ", e)
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
                    <ListItem key={blogType.type} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={blogType} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </Drawer>

        </Container>
    )
}

const Blog: FC<{ path: string }> = () => {
    const param = useParams()
    const [blog, setBlog] = useState({ id: 0, title: "", desc: "", type: "", image: "" })

    console.log(param)

    useEffect(() => {
        blogService.findBlog(param.blogId, null).then(data => {
            setBlog(data[0])
        })
    }, [])

    return (
        <Container>
            <h1>{blog.title}</h1>
            <p>{blog.desc}</p>
        </Container>
    )
}

const Page: FC<{ path: string }> = () => {

    const location = useLocation()
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        console.log(location)
        if (location.pathname === "/tech") {
            blogService.findBlog(null, "tech").then(data => {
                setBlogs(data)
            })
            return
        }

        if (location.pathname === "/entertainment") {
            blogService.findBlog(null, "entertainment").then(data => {
                setBlogs(data)
            })
            return
        }

        if (location.pathname === "/community") {
            blogService.findBlog(null, "community").then(data => {
                setBlogs(data)
            })
            return
        }

        if (location.pathname === "/") {
            blogService.fetchBlogs().then(data => {
                setBlogs(data)
            })
            return
        }
    }, [location])

    return (
        <Grid sx={{ padding: "0.5rem" }} container direction="row" spacing={4} justifyContent="center">
            {blogs.map(blog => (
                <Grid item sx={{ flexShrink: 0, flexGrow: 1 }}>
                    {/* @ts-ignore */}
                    <Link style={{ textDecoration: "none" }} to={`/blog/${blog.id}`}>
                        {/* @ts-ignore */}
                        <BlogCard {...blog} />
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}

const Tech: FC<{ path: string }> = () => <div>Tech</div>
const Community: FC<{ path: string }> = () => <div>Community</div>
const Entertainment: FC<{ path: string }> = () => <div>Entertainment</div>

interface HomeProps {
    path?: string
}

const Home: FC<HomeProps> = () => {
    return (
        <>
            <Container sx={{ padding: "3rem 1rem" }}>
                <Link style={{ color: "#000", textDecoration: "none" }} to="/">
                    <h1 style={{ textAlign: "center" }}>Belog</h1>
                </Link>
                <Grid container direction="row" spacing={1} justifyContent="center">
                    {blogTypes.map(blogType => (
                        <Grid item>
                            <BlogLink to={`/${blogType.url}`}>{blogType.type}</BlogLink>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Router>
                <Blog path="/blog/:blogId" />
                {blogTypes.map((blogType) => (
                    <Page path={`/${blogType.url}`} />
                ))}
                {/* <Tech path="tech" />
                <Community path="/community" />
                <Entertainment path="/entertainment" /> */}
                <Page path="/" />
            </Router>
            {/* <Sidebar /> */}
        </>
    )
}

const Main = () => {
    return (
        <Router>
            <Home path="/*" />
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