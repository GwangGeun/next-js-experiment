'use client'

import {useEffect, useCallback} from "react";
import {cookies} from "next/headers";

/*
- Setting/Deleting cookie is only available via either server action or router handler on client side.
 */
export const CookiePage = () => {

    useEffect(() => {
        console.log("CookiePage")
        // deleteCookie()
    }, []);


    // const deleteCookie = useCallback(async () => {
    //     try {
    //         await fetch(`http://localhost:3000/api/logout`, {
    //             method: "POST",
    //             cache: "no-store",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }, []);

    return (
        <div>
            cookiePage
        </div>
    );
}