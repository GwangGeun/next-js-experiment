# Experiment repository for next js

## App router

1. Data fetch
- [fetching on server side is best practice unless has special reason](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#:~:text=Whenever%20possible%2C%20we%20recommend%20fetching%20data%20on%20the%20server%20with%20Server%20Components.%20This%20allows%20you%20to%3A)
- Regarding to mutation, [server action supports only POST METHOD](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#:~:text=Behind%20the%20scenes%2C%20actions%20use%20the%20POST%20method%2C%20and%20only%20this%20HTTP%20method%20can%20invoke%20them.).
That is, in case of post request, we can use server action calling BACKEND API directly with server actions whereas in case of put,delete we should make server action call router handler (next js api)
calling BACKEND API indirectly.

2. Cookie
- Setting, Deleting cookie works only via either server action or router handler on **client side**.
- In other words, directly calling server action / router handler (api) on page level ( on server side ) doesn't work


