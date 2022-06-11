# Preact Neutralino TypeScript Starter
A boilerplate starter for building lightweight desktop applications with Preact, Neutralino and TypeScript. The template uses SCSS and React Redux.

## Running the application in a development mode
Firstly, clone or fork this repository and then run following commands.

```
// install neutralino cli globally
npm install -g @neutralinojs/neu

// inside the root folder of the repository
neu update

// install all the dependencies
npm run setup

// run application in the development mode (after the preact project builds, you need to refresh the neutralino app)
npm run dev
```

## Useful commands

*   `npm run test:coverage`: runs tests to show the code coverage

*   `npm run test:watch`: runs tests in watch mode

*   `npm run dev:front`: runs only the Preact project in development mode

*   `npm run dev:app`: runs only the neutralino.js application in development mode

*   `npm run build-release`: runs only the neutralino.js application in development mode
