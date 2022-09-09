import React, { FC } from "react";
import { Link, Router } from "@reach/router";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { Blog } from "./pages/Blog";
import { Page } from "./pages/Page";
import { blogTypes, BlogLink } from "./App";

interface HomeProps {
    path?: string;
}
export const Home: FC<HomeProps> = () => {
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
                <Page path="/" />
            </Router>
            {/* <Sidebar /> */}
        </>
    );
};
