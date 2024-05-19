import {Button} from "@/app/client/button";
import {CookiePage} from "@/app/client/cookie";
import {cookies} from "next/headers";

/*


 */
export default async function Cookie() {
    const curCookie = cookies().get("test-cookie")
    /*
    ** This doesn't work. What it mean is that when fetching data fails due to 401, it's impossible to delete/set cookie via router handler in page level **
    ref - https://www.reddit.com/r/nextjs/comments/16839ra/nextjs_13_delete_cookie_server_side/

        await fetch(`http://localhost:3000/api/logout`, {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },
        });
    */
    return (
        <main>
            {"curCookie : " + curCookie?.value}
            <Button></Button>
            <CookiePage/>
        </main>
    );
}