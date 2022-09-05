

import React, { FC, useEffect, useRef } from "react"
import styled from "styled-components"
import { navigate } from "@reach/router"
import { useLocalStorage } from "../utils/hooks"
// @ts-ignore
import { fabric } from "fabric"

const Canvas = styled.canvas`
    width: 100vw;
    height: 100vh;
`

interface Props {
    path: string,
}

export const Home: FC<Props> = () => {
    const canvasRef = useRef(null)
    // @ts-ignore
    const [token] = useLocalStorage("token")

    useEffect(() => {
        //
    }, [])

    useEffect(() => {
        // fabric.Object.prototype.objectCaching = true;

        var canvas = new fabric.Canvas('canvas', {
            isDrawingMode: true,
        });

        // @ts-ignore
        // canvas.freeDrawingBrush = new fabric.Circle(canvas)
    }, [])

    // if (!token) {
    //     navigate("/login")
    //     return null
    // }

    return (
        <div>
            <Canvas ref={canvasRef} id="canvas" width={window.innerWidth} height={window.innerHeight}></Canvas>
        </div>
    )
}


