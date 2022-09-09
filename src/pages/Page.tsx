import React, { FC, useState, useEffect } from "react";
import { Link, useLocation } from "@reach/router";
import { Grid } from "@mui/material";
import { BlogCard } from "../components/BlogProps";
import { blogService } from "../utils/blogService";

export const Page: FC<{ path: string; }> = () => {

    const location = useLocation();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        console.log(location);
        if (location.pathname === "/tech") {
            blogService.findBlog(null, "tech").then(data => {
                if (data) {
                    setBlogs(data);
                }
            });
            return;
        }

        if (location.pathname === "/entertainment") {
            blogService.findBlog(null, "entertainment").then(data => {
                if (data) {
                    setBlogs(data);
                }
            });
            return;
        }

        if (location.pathname === "/community") {
            blogService.findBlog(null, "community").then(data => {
                if (data) {
                    setBlogs(data);
                }

            });
            return;
        }

        if (location.pathname === "/") {
            blogService.fetchBlogs().then(data => {
                if (data) {
                    setBlogs(data);
                }
            });
            return;
        }
    }, [location]);

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
    );
};
