'use client'

import {Button2} from "@/app/client/button";
import {revalidateTest} from "@/app/action/fetch";
import {useEffect} from "react";

export const FetchPage = () => {

    useEffect(() => {
        console.log("[useEffect] FetchPage")
    }, []);

    const handle = (e: any) => {
        // console.log(e)
        revalidateTest()
        // revalidateTag("test-tag")
    }

    return (
        <div>
            fetchPage
            <Button2 onClick={handle}/>
        </div>
    );
}