# aes-smiesko.sk

Autodiagnostika, Alarmy a zabezpečovacie systémy, Parkovací asistenti, Montáže a opravy kamier, Servis rádií a multimediálnych systémov

Online: http://www.aes-smiesko.sk

## Requirements

Node version 18+

## Installation

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### Deployment

Push the React app to the GitHub repository:

```shell
$ npm run deploy
```

That will cause the `predeploy` and `deploy` scripts defined in `package.json` to run.

#### Under the hood

Under the hood, the `predeploy` script will build a distributable version of the React app and store it in a folder named `build`. Then, the `deploy` script will push the contents of that folder to a new commit on the `gh-pages` branch of the GitHub repository, creating that branch if it doesn't already exist.

By default, the new commit on the `gh-pages` branch will have a commit message of "Updates". You can [specify a custom commit message](https://github.com/gitname/react-gh-pages/issues/80#issuecomment-1042449820) via the `-m` option, like this:

```shell
$ npm run deploy -- -m "Deploy React app to GitHub Pages"
```