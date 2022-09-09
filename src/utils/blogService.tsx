import axios from "axios";

export const blogService = {
    fetchBlogs: async () => {
        try {
            const res = await axios.get("/.netlify/functions/hello");
            console.log(res);
            return res.data;
        } catch (e) {
            console.log("Error Occured while fetching the blogs fetchBlogs fn ", e);
        }
    },
    addBlog: async (title: string, desc: string, image: string) => {
        try {
            const res = await axios.post("/.netlify/functions/hello", {
                title,
                desc,
                image
            });

            console.log(res);
            return res.data;
        } catch (e) {
            console.log("Error occured while adding the blog addBlog fn : ", e);
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
                });
            } else {
                res = await axios({
                    url: "/.netlify/functions/hello",
                    params: JSON.stringify({
                        blogType
                    }),
                    method: "GET"
                });
            }

            console.log(res);
            return res.data;
        } catch (e) {
            console.log("Error occured while find the blog findBlog fn : ", e);
        }
    }
};
