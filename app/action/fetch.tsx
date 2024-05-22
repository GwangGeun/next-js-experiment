'use server'

import {revalidateTag} from "next/cache";

export const revalidateTest = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "name",
                jon: "job",
            }),
        },
    );
    console.log("POST : " + res.status)
    revalidateTag("test-tag")
}

export const deleteMethodTestOnServerAction = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/users/2`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        },
    );
    console.log("DELETE : " + res.status)
    revalidateTag("test-tag")
}