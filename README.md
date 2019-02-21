#### This app uses redux and some other dependencies so go to the folder and run from terminal:
> npm install
> npm start

#### src/index.js
The base of the app, it instances the redux stuff and wraps the app component inside a <Provider/> 

#### src/app.js
Here the Movements lists are defined and starts the logic

#### src/containers/movements/movementsLists.js
This component lists the movements retrieved as props from redux state

#### src/containers/movements/movementFormComponent.js
This is the form component to create news movements (debits/credits)

#### src/containers/movements/movementComponent.js
This is the movement component rendered for each movement item 

#### src/actions/index.js
This file contains the action reducers 

#### src/reducers
It contains the combineReducers and the reducers