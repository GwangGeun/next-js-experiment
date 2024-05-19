'use client'

import {setCookie} from "@/app/action/cookie";

export const Button = () => {
    return <button onClick={e => setCookie()}>set cookie</button>
}