import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {cookies} from "next/headers";
import {setCookie} from "@/app/action/cookie";
/*
 REF - https://nextjs.org/docs/app/building-your-application/routing/middleware#nextresponse

 Summary
 - In middleware, it's available either to delete or to set cookie

 */
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    console.log("middleware")
    // request.cookies.delete('test-cookie')
    // request.cookies.clear()
    // let cookie = request.cookies.get('test-cookie')
    // console.log("[test-cookie] cookie : " + cookie)
    // const allCookies = request.cookies.getAll()
    // console.log("[test-cookie] allCookies : " + allCookies)
    // console.log(request.cookies.has('test-cookie'))
    //
    const response = NextResponse.next()
    response.cookies.delete('test-cookie')
    // // response.cookies.set('test-cookie', 'fast')
    // response.cookies.set({
    //     name: 'test-cookie',
    //     value: 'fast',
    //     path: '/',
    // })
    // cookie = response.cookies.get('test-cookie')
    // console.log(cookie)
    // The outgoing response will have a `Set-Cookie:vercel=fast;path=/` header.
    return response
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/cookie',
}