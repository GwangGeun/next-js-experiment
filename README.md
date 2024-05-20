# Experiment repository for next js

## App router

1. Data fetch
- [fetching on server side is best practice unless has special reason](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#:~:text=Whenever%20possible%2C%20we%20recommend%20fetching%20data%20on%20the%20server%20with%20Server%20Components.%20This%20allows%20you%20to%3A)
- Use mutation afterwards. Leverage revalidateTag in server actions

2. Cookie
- Setting, Deleting cookie works only via either server action or router handler on client side.
- In other words, directly calling server action / router handler (api) on page level ( on server side ) doesn't work


