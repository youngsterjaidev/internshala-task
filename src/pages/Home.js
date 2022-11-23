import React, { Suspense } from "react"
import { Router } from "@reach/router"

const _ = React.lazy(() => import('./_'))
const __ = React.lazy(() => import('./__'))

const Loading = () => {
    return <div>Route Loading</div>
}

const Home = () => {
    return (<div>
        <div>App</div>
        <Suspense fallback={<Loading />}>
            <Router>
                <_ path="/" />
                <__ path="/red" />
            </Router>
        </Suspense>
    </div>)
}

export default Home