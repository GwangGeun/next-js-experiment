'use client'

import {Button2} from "@/app/client/button";
import {deleteMethodTestOnServerAction, revalidateTest} from "@/app/action/fetch";
import {useEffect} from "react";

export const FetchPage = () => {

    useEffect(() => {
        console.log("[useEffect] FetchPage")
    }, []);


    // const handle = (e: any) => {
    //     // console.log(e)
    //     // revalidateTest()
    //     // revalidateTag("test-tag")
    // }

    return (
        <div>
            <Button2 onClick={() => {deleteMethodTestOnServerAction().then(r => console.log(r))}}/>
            fetchPage
        </div>
    );
}