'use server'

import { cookies } from "next/headers";

export const deleteCookie = async () => {
    cookies().delete("test-cookie")
}

export const setCookie = async () => {
    cookies().set({
        name: "test-cookie",
        value: "1234",
        httpOnly: true,
        secure: true,
        path: "/",
    });
}