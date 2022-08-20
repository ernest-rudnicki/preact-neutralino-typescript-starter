# Preact Neutralino TypeScript Starter
A boilerplate starter for building lightweight desktop applications with Preact, Neutralino and TypeScript. The template uses SCSS and React Redux.

## Running the application in a development mode
```
// install neutralino cli globally
npm install -g @neutralinojs/neu

// inside the root folder
npm install

// inside the root folder of the repository
neu update

// install preact dependencies and do initial build
npm run setup

// run application in the development mode (after the preact project builds, you need to refresh the neutralino app)
npm run dev

// if the application does not refresh (happened for me on Mac with M1) run app parts separataly
npm run dev:front

// in another terminal
npm run dev:app
```

## Useful commands

*   `npm run test:coverage`: runs tests to show the code coverage

*   `npm run test:watch`: runs tests in watch mode

*   `npm run dev:front`: runs only the Preact project in development mode

*   `npm run dev:app`: runs only the neutralino.js application in development mode

*   `npm run build-release`: builds the project for release
