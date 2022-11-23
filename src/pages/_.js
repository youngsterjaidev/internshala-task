import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"

const Container = styled.div`
    padding: 1rem;
`

const Card = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 1rem;
`
const CardBody = styled.div`
    flex: 2;
`
const CardFooter = styled.div`
    flex: 1;
`

const Img = styled.img`
    width: 100%;
`

const dummyData = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    }
]

const _ = () => {
    const [result, setResult] = useState({ loading: false, data: [] })

    const fetchData = async () => {
        try {
            setResult({ loading: true, data: [] })
            let response = await axios.get("https://jsonplaceholder.typicode.com/photos")
            console.log(response)

            if (response.status === 200) {
                setResult({ loading: false, data: response.data })
            }
        } catch (e) {
            console.log("Error Occured while fetching the photos fetchData fn :", e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (result.loading) {
        return <div>Loading...</div>
    }

    return (
        <Container>
            <div>___</div>
            <ul>
                {result.data.map((item, index) => (
                    <li key={index}>
                        <Card>
                            <CardBody>{item.title}</CardBody>
                            <CardFooter>
                                <Img loading="lazy" src={item.url} alt="" />
                            </CardFooter>
                        </Card>
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default _