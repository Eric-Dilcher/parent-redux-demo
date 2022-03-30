# Parent redux demo

This app demostrates how to connect separate react + react-redux apps running in a parent and child windows using a technique dubbed "parent redux". This technique shares the parent window redux store with all child windows, allowing the separate react + react-redux apps to act as if they were one app.

## Conceptual overview
The concept of the "parent redux" technique is very simple: Child windows access the parent window's redux store through `window.opener`, and then use that store when bootstrapping their app.

## Setting up your own multi-page react + react-redux app.
Configuring your redux build to generate multiple separate react apps is not obvious. This demo app illustrates one way to achieve this (using [vitejs](https://vitejs.dev/) to build the project). Following steps were taken to set up the demo app.

1. Create a standard react+redux app, and create a redux store.
2. Create a file which defines two functions. The first for exposing the parent app's redux store, and the second for getting a reference to if from a child window. See `parentRedux.ts` for an example.
3. For each child window you want to add, duplicate (and rename) the main `tsx` file (i.e. the file linked in the script tag in `index.html`).
4. For each child window you want to add, duplicate (and rename) `index.html`, and change the script tag to link to the duplicated `tsx` file from step 3. See `childWindow.html` for an example.
5. In the parent window's main `tsx` file, call `exposeReduxStore()`. See `mainWindow.tsx` for an example.
6. In each child window's main `tsx` file, use `getParentReduxStore()` to get a reference to the parent window's redux store. Pass this reference to `<Provider>` as you do in a react-redux app. See `childWindow.tsx` or an example.
7. Adjust `vite.config.ts`. Add an entry for every html file (including the parent window's `index.html`) to `build.rollupOptions.input`.


## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.