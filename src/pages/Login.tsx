import React, { FC } from "react"
import styled from "styled-components"
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
    return (
        <>
            <Container>
                <Form>
                    <legend>Welcome back !</legend>
                    <div>
                        <Input type="email" placeholder="email" />
                    </div>
                    <div>
                        <Input type="password" placeholder="password" />
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
