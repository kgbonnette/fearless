# Getting Started with Purple Cow Counter App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Running In Docker
A Docker file is included for convenience.  To use it, complete the following steps.
 1. Build the Docker image.
    * From the project directory, run `docker build -t fearless/purple-cow-counter .` 
 1. Run the Docker image.
    * Next, run `docker run -p 3000:3000 fearless/purple-cow-counter`
 1. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Future Considerations
1. It would be helpful to have an easily accessible way to reset the counter. (Perhaps this would be limited to those with an admin role so that it is not accidentally reset by users.)
    * To reset the counter manually, enter the following URL in a browser or a REST tool such as Postman. - https://api.countapi.xyz/set/kbonnette-fearless/1ccb732e-b55a-4404-ad3f-0f99c02fe44e?value=0
1. Verbiage should be added to describe the purpose/use of the app.

## About
Technologies used in the creation of this proof-of-concept:
 * HTML
 * Javascript
 * React.js
 * create-react-app
 * React Suite (UI components)
 * Docker
