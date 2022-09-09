import React, { FC, useState, useEffect } from "react";
import { useParams } from "@reach/router";
import { Container } from "@mui/system";
import { blogService } from "../utils/blogService";

export const Blog: FC<{ path: string; }> = () => {
    const param = useParams();
    const [blog, setBlog] = useState({ id: 0, title: "", desc: "", type: "", image: "" });

    console.log(param);

    useEffect(() => {
        blogService.findBlog(param.blogId, null).then(data => {
            setBlog(data[0]);
        });
    }, []);

    return (
        <Container>
            <div style={{
                background: `url("${blog.image}") no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "50vh",
                width: "100%"
            }}></div>
            <h1>{blog.title}</h1>
            <p style={{ lineHeight: "1.6em" }}>{blog.desc}</p>
        </Container>
    );
};
