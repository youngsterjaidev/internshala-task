import { Handler } from "@netlify/functions";
import { IUtilString } from "fabric/fabric-impl";

let id = 3

const blogMem = [
    {
        id: 1,
        title: "is it :modal",
        type: 'tech',
        desc: "CSS :modal is available from Chrome 105.",
        image: "https://web-dev.imgix.net/image/Dyx9FwYgMyNqy1kMGx8Orz6q0qC3/xyyPgtSNjfzhcOGPn5lG.jpg",
    },
    {
        id: 2,
        title: "Entertainment",
        desc: 'Tech',
        type: 'entertainment',
        image: "https://web-dev.imgix.net/image/kheDArv5csY6rvQUJDbWRscckLr1/S1QCCeuPNPnSGPMLqOgn.JPG",
    },
    {
        id: 3,
        title: "Community",
        type: 'community',
        desc: 'Entertainment',
        image: "https://web-dev.imgix.net/image/kheDArv5csY6rvQUJDbWRscckLr1/iuFKGqZPtsuMKZSAPwMw.jpg",
    }
]

const filterElement = (key: string | number, value: string) => {
    if(key === 'id') {
        return blogMem.filter(item => item[key] === +value)
    } else {
        console.log("value : ", +value)
        return blogMem.filter(item => item[key] === value)
    }  
}


const handler: Handler = async (event, context) => {

    console.log(event)

    if (Object.keys(event.queryStringParameters).length !== 0) {
        console.log("Not Allowed route")
        let param = event.queryStringParameters['0']
        const { blogId, blogType } = JSON.parse(param)

        if (blogId && blogType) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: "both are there" })
            }
        }

        if (blogId) {
            console.log(blogId)
            let result = filterElement("id", blogId)
            console.log(result)
            return {
                statusCode: 200,
                body: JSON.stringify(result)
            }
        }

        if (blogType) {
            console.log(blogType)
            let result = filterElement("type", blogType)
            console.log(result)
            return {
                statusCode: 200,
                body: JSON.stringify(result)
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

    console.log(blogMem)

    return {
        statusCode: 200,
        body: JSON.stringify(blogMem)
    }
}

export { handler }