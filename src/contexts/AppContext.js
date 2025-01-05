import React, { createContext, useEffect, useState } from "react";
import { getUser } from "../utilities/users-service";
import * as exercisesAPI from "../utilities/exercise-api";
import * as musclesAPI from "../utilities/muscle-api";
import * as workoutsAPI from "../utilities/workout-api";
import * as usersAPI from "../utilities/users-api";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [btnLoading, setBtnLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const [exerciseList, setExerciseList] = useState([]);
  const [workout, setWorkout] = useState([]);
  const [activeWorkout, setActiveWorkout] = useState(false);
  const [totalFatigue, setTotalFatigue] = useState({
    torsoFatigue: 0,
    armsFatigue: 0,
    legsFatigue: 0,
  });

  useEffect(() => {
    const initializeData = async () => {
      setLoading(true); // Start loading
      try {
        // Fetch exercises
        const exercises = await exercisesAPI.getAll();
        setExerciseList(exercises);

        // Fetch muscle categories
        const muscleCats = await musclesAPI.getAll();
        const uniqueCategories = [
          ...new Set(muscleCats.map((muscle) => muscle.name)),
        ];
        setCategories(uniqueCategories);
        setActiveCat(uniqueCategories[0]); // Set the first category as active

        // Fetch user data from token
        const user = getUser(); // Get user from token
        if (user) {
          setCurrentUser(user); // Set the user if token is valid
        } else {
          setCurrentUser({}); // Clear user if no valid token
        }

        console.log("currentUser is: ", currentUser);
        // Fetch workout
        const workout = await workoutsAPI.getWorkout();
        setWorkout(workout);
        console.log("workout is: ", workout);
      } catch (err) {
        console.error("Failed to initialize data", err); // Handle error
      } finally {
        setLoading(false); // Stop loading
      }
    };

    initializeData(); // Call the initializeData function on mount
  }, []); // Run once when component mounts

  const handleAddToWorkout = (exercise) => {
    setWorkout((prevWorkout) => {
      // check if exercise exists in workout already
      const existingIndex = prevWorkout.exerciseList.findIndex(
        (item) => item.exercise.name === exercise.name
      );
      // add exercise fatigue to the workout's 'addedFatigue' object
      const updatedFatigue = {
        torsoFatigue:
          prevWorkout.addedFatigue.torsoFatigue + exercise.torsoFatigue,
        armsFatigue:
          prevWorkout.addedFatigue.armsFatigue + exercise.armsFatigue,
        legsFatigue:
          prevWorkout.addedFatigue.legsFatigue + exercise.legsFatigue,
      };

      // if exercise exists in workout, just increase quantity +1
      if (existingIndex >= 0) {
        const updatedExerciseList = [...prevWorkout.exerciseList];
        updatedExerciseList[existingIndex].qty += 1; // Increase quantity
        // update qty and addedFatigue
        return {
          ...prevWorkout,
          exerciseList: updatedExerciseList,
          addedFatigue: updatedFatigue,
        };
      } else {
        // if the exercise is not in the workout, add it, and add with default qty of 1
        // and update addedFatigue
        return {
          ...prevWorkout,
          exerciseList: [...prevWorkout.exerciseList, { qty: 1, exercise }],
          addedFatigue: updatedFatigue,
        };
      }
    });
  };

  const handleRemoveExerciseFromWorkout = (exercise) => {
    setWorkout((prevWorkout) => {
      //
      // Filter out the exercise directly from exerciseList
      const updatedExerciseList = prevWorkout.exerciseList.filter(
        (item) => item.exercise.name !== exercise.name
      );

      console.log("this is updatedExerciseList: ", updatedExerciseList);

      // Find the removed exercise in prevWorkout to subtract its fatigue
      const removedExercise = prevWorkout.exerciseList.find(
        (item) => item.exercise.name === exercise.name
      );

      // Subtract the removed exercise's fatigue from the total addedFatigue
      const updatedFatigue = {
        torsoFatigue:
          prevWorkout.addedFatigue.torsoFatigue -
          removedExercise.exercise.torsoFatigue * removedExercise.qty,
        armsFatigue:
          prevWorkout.addedFatigue.armsFatigue -
          removedExercise.exercise.armsFatigue * removedExercise.qty,
        legsFatigue:
          prevWorkout.addedFatigue.legsFatigue -
          removedExercise.exercise.legsFatigue * removedExercise.qty,
      };

      return {
        ...prevWorkout,
        exerciseList: updatedExerciseList,
        addedFatigue: updatedFatigue,
      };
    });
  };

  const handleIncrementQty = (exercise) => {
    setWorkout((prevWorkout) => {
      const updatedExerciseList = prevWorkout.exerciseList.map((item) => {
        if (item.exercise.name === exercise.name) {
          // Increase the quantity of the exercise
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      });

      const updatedFatigue = {
        torsoFatigue:
          prevWorkout.addedFatigue.torsoFatigue + exercise.torsoFatigue,
        armsFatigue:
          prevWorkout.addedFatigue.armsFatigue + exercise.armsFatigue,
        legsFatigue:
          prevWorkout.addedFatigue.legsFatigue + exercise.legsFatigue,
      };

      return {
        ...prevWorkout,
        exerciseList: updatedExerciseList,
        addedFatigue: updatedFatigue,
      };
    });
  };

  const handleDecrementQty = (exercise) => {
    setWorkout((prevWorkout) => {
      const updatedExerciseList = prevWorkout.exerciseList
        .map((item) => {
          if (item.exercise.name === exercise.name) {
            // If quantity is 1, we return null to filter it out later
            if (item.qty === 1) {
              return null;
            }
            // Increase the quantity of the exercise
            return {
              ...item,
              qty: item.qty - 1,
            };
          }
          return item;
        })
        .filter((item) => item !== null);

      const updatedFatigue = {
        torsoFatigue:
          prevWorkout.addedFatigue.torsoFatigue - exercise.torsoFatigue,
        armsFatigue:
          prevWorkout.addedFatigue.armsFatigue - exercise.armsFatigue,
        legsFatigue:
          prevWorkout.addedFatigue.legsFatigue - exercise.legsFatigue,
      };

      return {
        ...prevWorkout,
        exerciseList: updatedExerciseList,
        addedFatigue: updatedFatigue,
      };
    });
  };

  async function handleResetFatigueAndWorkout() {
    setLoading(true);
    const updatedUser = await usersAPI.resetFatigue();
    setCurrentUser(updatedUser);
    await workoutsAPI.resetWorkout();
    const updatedWorkout = await workoutsAPI.getWorkout();
    setWorkout(updatedWorkout);
    setLoading(false);
  }

  async function handleAddRestDay() {
    setBtnLoading(true);
    const updatedUser = await usersAPI.addRestDay();
    setCurrentUser(updatedUser);
    const updatedWorkout = await workoutsAPI.addRestDay();
    setWorkout(updatedWorkout);
    setBtnLoading(false);
  }

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser, // Provide state and setter for count
        workout,
        setWorkout, // Provide state and setter for name
        loading,
        setLoading, // Provide state and setter for name
        activeWorkout,
        setActiveWorkout, // Provide state and setter for name
        btnLoading,
        setBtnLoading, // Provide state and setter for name
        exerciseList,
        setExerciseList,
        activeCat,
        setActiveCat,
        categories,
        setCategories,
        handleAddToWorkout,
        handleRemoveExerciseFromWorkout,
        handleIncrementQty,
        handleDecrementQty,
        handleResetFatigueAndWorkout,
        handleAddRestDay,
        totalFatigue,
        setTotalFatigue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
