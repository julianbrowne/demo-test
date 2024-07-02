
# Sample Basic Login Form

Built using React Native & Expo

Run using `npx expo start --web` etc

Browser will open on `http://localhost:8081/`

## Basic Specification

* Simple login screen that takes a username (email) and password
* Warn with message if no email is entered
* Warn with message if invalid email format is entered
* Warn with message if no password is entered
* Warn with message if incorrect credentials are entered (faked backend)
* Show welcome screen if correct credentials are entered

## QA

Run through eslint (`npm run lint`)
Jest tests (`npm run test`)
SonarCloud static analysis (in `docs`)
Screen Shots in `docs` folder

## Credentials

(can be found in `src/fakeCreds.json`)

username: `rakbank@rakbank.com`
password: `r4kb4nk`
