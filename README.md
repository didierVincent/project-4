# Gym Fatigue Tracker! (Fatigue Data Visualisation App)

**Unit 4 Project - MERN Full-stack Application (MongoDB/Express.js/React/Node.js)**

## Description

**Track your workout activity, and we'll show you if you're at any real injury risk!**

Data visualisation app that lets users create workouts with a body model representing muscle fatigue levels and the injury risk potential.

## Getting Started!

**Here's a link to my app!:** https://project-4-4wu0.onrender.com/

Trello Link: https://trello.com/b/z6gwByEL/project-4-gym-fatigue-tracking-app

## Screenshots

**Login Page**

![Login](docs/AuthPageLogin.png)

**Signup Page**

![Signup](docs/AuthPageLogin.png)

![New Workout Page (New)](docs/NewWorkoutPageNew.png)

![New Workout Page (Demo)](docs/NewWorkoutPageWorkout.png)

![Workout History Page (New)](docs/WorkoutHistoryPageNew.png)

![Workout History Page (Demo)](docs/WorkoutHistoryPageWorkouts.png)

## Technology Used

### MERN Stack:

MongoDB, Express.js, React, Node.js
<BR> (Created in Visual Studio Code)

#### Backend Enhancements

- **Mongoose** - for schema-based solution to model application data.
- **JWT Authentication** - for secure user authentication and data transfer.
- **Bcrypt** - for hashing passwords before storing them in the database.

#### Frontend Enhancements

- **React Router:** for handling routing in a React application.
- **Fetch API:** for making HTTP requests from the client side.

#### Other technology implemented:

- Inkscape - for SVG creation/editing

## Next Steps

### For Users

- Expand and create more specific muscle categories and more available exercises
- Add functionality so user fatigue levels reduce over time each day!
- Introduce other types of fatigue relevant for injury prevention, such as joint fatigue and CNS fatigue.
<!-- - Add images/icons for different workouts -->

### Technical Additions

#### Resposiveness: Refactor state management.

- Current state management has vulnerabilities and users are prone to crashes occasionally.
- Refactor current state management and reduce unnecessary AJAX requests.
- Implement 'Relay' to manage and optimise state management.

#### Implement testing frameworks

- Implement Jest or Mocha or Chai for improved code quality, documentation and a more robust application.

#### Responsive CSS

- Current CSS is only responsive on pc/laptop screens, needs to be refactored.
