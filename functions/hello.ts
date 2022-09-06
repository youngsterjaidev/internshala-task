import { Handler } from "@netlify/functions";

let id = 0

const blogMem = [
    {
        id: 0,
        title: "Lizard",
        type: 'Tech',
        desc: 'Kuch bhi',
        image: "https://web-dev.imgix.net/image/Dyx9FwYgMyNqy1kMGx8Orz6q0qC3/xyyPgtSNjfzhcOGPn5lG.jpg",
    }
]

const filterElement = (key: string | number, value: string) => {
    console.log(blogMem.filter(item => item[key] === value))
}


const handler: Handler = async (event, context) => {

    if (event.queryStringParameters) {
        let param = event.queryStringParameters['0']
        const { blogId, blogType } = JSON.parse(param)

        if (blogId && blogType) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: "both are there" })
            }
        }

        if (blogId) {
            filterElement("id", blogId)
            return {
                statusCode: 200,
                body: JSON.stringify({ message: blogId })
            }
        }

        if (blogType) {
            filterElement("type", blogType)
            return {
                statusCode: 200,
                body: JSON.stringify({ message: blogType })
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: blogId })
        }
    }


    if (event.httpMethod === "POST") {
        if (!event.body) return {
            statusCode: 400,
            body: JSON.stringify({ message: "No records found !" })
        }

        // @ts-ignore
        const { title, desc, image, type } = event.body

        blogMem.push({
            id: id++,
            title,
            desc,
            image,
            type
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