# Lingo

Lingo is a single page [React](https://github.com/facebook/react/) application built by [Appear Here](https://github.com/appearhere) using our open-source pattern library, [Bloom 🐙](https://github.com/appearhere/bloom).

We built Lingo to be the single source of truth for the definitions of all terms and key metrics we use.

Want to have a play? Click the button below to deploy the demo app to Heroku.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/appearhere/lingo)

The app will be deployed with [sample data](https://github.com/appearhere/lingo/blob/master/src/sampleTerms.json).
To add your own data, create a `terms.json` file in the `src` directory. This should be an array of terms (JSON objects).

The following table outlines the structure of a term:

| Key           | Purpose       |
| :------------ |:------------- |
| name          | The name of the term/metric. |
| department    | The department or area of the business that the term/metric belongs to. |
| definition    | A high level definition of the term/metric that can be understood by anyone in the business regardless of their department. |
| what          | A more granular description of the term/metric. This is where you may find a method if the term/metric comes from a calculation. |
| when          | How regularly do we report on this term/metric? e.g, annually, quaterly, and monthly.  |
| where         | Other than the main department, where in the business is this term relevant. |
| expected_boundary | When reporting on this term say by creating a look in Looker, what sort of value range should you expect. |
| hint          | Any potential gothchas that need to be taken into account when looking at this term/metric. |
| looker        | If applicable, a link to a [Looker](https://looker.com/) visualisation or 'look'. |

The value of all of these key's should be of type String. Within this string Markdown is supported for all keys expect for `name` and `looker`.
If applicable the value of the `looker` field must be a valid url.

## Getting started

In the project directory run:

### `yarn`

This will install the required dependencies.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
