import { cookies } from "next/headers";

export async function POST(_: Request) {
  console.log("api called")
  cookies().delete("test-cookie");
  return new Response("logout success", {
    status: 200,
  });
}
