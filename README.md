# React useContext

The `useContext` hook is a way to share data between components in React without having to pass props down manually at every level (known as "prop drilling"). It allows you to create a global context object and provide it to any component in the component tree, regardless if they are children or siblings. This is particularly useful for things like user authentication, theme settings, carts or any other data that needs to be accessed by multiple components throughout the application.

On the `main` branch you will find a basic example of a provider and a consumer
Then you can switch to the `basic-login` branch to study the implementation of useContext for user login status, data and protected routes.

You will also find a refactoring of previous fetch calls, now as custom hooks.

As homework, protect `products` and `products/:id` from unauthorized access using the `<PrivateRoute/>` component
