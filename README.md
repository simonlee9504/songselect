# songselect

Hello, this is the beginning of our song select game that will be programmed using Node.js, React-Redux, and TypeScript.

Our goal is to make [scribbl.io](https://skribbl.io) except for music!

Founding contributors are: [Tony Tian](https://github.com/tonytian2357), [Simon Lee](https://github.com/simonlee9504), and [Ethan Yap](https://github.com/ethany3)

## Installation

### Dependencies

-   Node.js (currently being developed using version `14.17.0 LTS`)
-   TBD (database)

### Steps

1. Clone this `git` repository using:

```
git clone https://github.com/simonlee9504/songselect.git
```

2. Install the necessary dependencies (for both the client and server) by running `npm run install-dev`

3. Start the backend API by `cd`ing into the `api` folder and running `npm run start`

4. Start the frontend app by `cd`ing into the `client` folder and running `npm run start`

5. To run both the client and API at the same time, run `npm run start-dev` in the base project directory

## Project Structure

### `api`

-   contains the backend RESTful API built using ExpressJS and TypeScript
-   this is where you will find the API routes necessary to allow for players to fetch and share data with other players

### `client`

-   contains the web app which runs the frontend interface providing users with gameplay and interaction

## Development Tips

-   I suggest using VSCode and the Prettier extension in order that the code all gets formatted similarly
-   Eventually, the client will be served entirely from the server but during development, it is easier to work with and debug with Create-React-App's service worker
    -   Using `proxy`, we are able to simulate that the client and API are on the same server to code efficiently
