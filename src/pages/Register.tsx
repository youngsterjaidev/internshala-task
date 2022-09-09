import React, { FC, useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { Link } from "@reach/router"
import { Input, Button } from "../components/index"

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-items: center;
`

const Form = styled.form`
    text-align: center;
    padding: 4rem 2rem;
    background: #fff;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 20px 8px #00000026;


    & > div {
        padding: 0.4em 0em;
    }
`
const Legend = styled.legend`
    font-weight: bold;
    margin-bottom: 1em;
`

const LoginButton = styled(Button)`
    display: block;
    width: 100%;
    font-family: 'Oswald', sans-serif;
`

const MyLink = styled(Link)`
    text-decoration: none;
    color: #000;
`

interface Props {
    path?: string
}

export const Register: FC<Props> = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    // @ts-ignore
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            let res = await axios({
                url: "https://baas0.herokuapp.com/users/login",
                method: "POST",
                data: {
                    email,
                    password,
                    username
                }
            })

            console.log(res)
        } catch (e) {
            console.log("Error Occured while submiting the form : ", e)
        }
    }

    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Legend>Welcome back !</Legend>
                    <div>
                        <Input type="text" placeholder="username" onChange={handleUsername} />
                    </div>
                    <div>
                        <Input type="email" placeholder="email" onChange={handleEmail} />
                    </div>
                    <div>
                        <Input type="password" placeholder="password" onChange={handlePassword} />
                    </div>
                    <div>
                        <LoginButton type="submit" primary>Sign Up</LoginButton>
                    </div>
                    <div>
                        <MyLink to="/login">Already a user ?</MyLink>
                    </div>
                </Form>
            </Container>
        </>
    )
}

