# InVerte React Web App 

## Authors: InVerteDev1

## Version: V.0.0.2

# Summary
Web app used for MVP of InVerte inventory management Service. Created with npx create-react-app.
The main goal is to read weight-readings real-time from web-sockets.
The app will give a visualization of the added *PlateOrders* of an specific restaurant

# Available Scripts

## Install dependencies: 
npm install or npm ci

## Start web app:
 npm run start

## Test websocket:
 npm run webSocketBot

# How to Run?

## Requires that the API server is running alongside
https://github.com/jarco0204/inverte-api

1. npm run install
2. npm run start

## To test websockets in username/prepare
1. Open a different terminal window.
2. Navigate to root of project.
3. npm run webSocketBot

# Modules Installed

### react-router-dom
Used to handle the pages

### styled-components
Used to handle the CSS fro the project

### Eslint & Prettier
Also installed eslint-config-prettier.

### react-carousel-responsive
The CSS export file is in assets/css

### socket.io client
Receive data sent from WeightScaleBot.js

### chart.js
Display data on dashboard-style.

# Future fixes
1. Dynamic routing /"usernameID"/main


