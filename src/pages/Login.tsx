import React, { FC, useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { useLocalStorage } from "../utils/hooks"
import { Link, navigate } from "@reach/router"
import { Input, Button } from "../components/index"

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-items: center;
`

const Form = styled.form`
    text-align: center;
    padding: 2.5rem 1rem;
    box-shadow: 0px 0px 20px 8px #00000026;


    & > div {
        padding: 0.4em 0em;
    }
`

const LoginButton = styled(Button)`
    display: block;
    width: 100%;
`

const MyLink = styled(Link)``

interface Props {
    path?: string
}

export const Login: FC<Props> = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // @ts-ignore
    const [token, setToken] = useLocalStorage("token")

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
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
                    password
                }
            })

            console.log(res.data)
            setToken(res.data)
        } catch (e) {
            console.log("Error Occured while submiting the form : ", e)
        }
    }

    if (token) {
        navigate("/")
        return null
    }

    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <legend>Welcome back !</legend>
                    <div>
                        <Input type="email" placeholder="email" onChange={handleEmail} />
                    </div>
                    <div>
                        <Input type="password" placeholder="password" onChange={handlePassword} />
                    </div>
                    <div>
                        <LoginButton type="submit" primary>Login</LoginButton>
                    </div>
                    <div>
                        <MyLink to="/register">New user</MyLink>
                    </div>
                </Form>
            </Container>
        </>
    )
}
