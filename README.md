# Hello Webpack

This is an example app for learning about how to use webpack

## Installation

Fork or clone the repository then

```
npm install
```

You should be able to the app working by opening the index.html in your browser (it's pretty lo-fi)

## Challenges

1. Compile the JavaScript using webpack. Verify it works by running the included server.

   - The required node modules should already be installed
   - You will need to change the `index.html`
   - A build script has been added to the `scripts` section of `package.json`
   - A `webpack.config.js` already exists for you to complete

2. The app looks bad. Improve by adding `style.css` to it.

   - Webpack can use 'loaders' to process different types of modules
   - Use the `css-loader` and `style-loader`

3. Introduce an error into the app. I would suggest something like this: `const nextGreeting = GREETINGS[index + 1000];` Rebuild the app and make a note of the error trace in the console. Provide a better trace by using a sourcemap

4. The app only has a production mode so development is pretty clunky. Create a live reloading development mode by using `webpack-dev-server`

5. Convert the app to `react`. You will need to use the `babel-loader` to transpile the JSX.
