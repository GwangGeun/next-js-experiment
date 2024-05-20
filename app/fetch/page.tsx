import {FetchPage} from "@/app/client/fetch";

export default async function Fetch() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/users/2`, {
            next: {tags: ['test-tag']},
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        },
    );

    console.log("GET : " + res.status)

    return (
        <main>
            hi fetch
            <FetchPage/>
        </main>
    );
}