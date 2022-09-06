import { Handler } from "@netlify/functions";

let id = 0

const blogMem = [
    {
        id: 0,
        title: "Lizard",
        desc: 'Kuch bhi',
        image: "https://web-dev.imgix.net/image/Dyx9FwYgMyNqy1kMGx8Orz6q0qC3/xyyPgtSNjfzhcOGPn5lG.jpg",
    }
]

const handler: Handler = async (event, context) => {

    if (event.httpMethod === "POST") {
        if (!event.body) return {
            statusCode: 400,
            body: JSON.stringify({ message: "No records found !" })
        }

        // @ts-ignore
        const { title, desc, image } = event.body

        blogMem.push({
            id: id++,
            title,
            desc,
            image
        })

        return {
            statusCode: 200,
            body: JSON.stringify(blogMem)
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify(blogMem)
    }
}

export { handler }