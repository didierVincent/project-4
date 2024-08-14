import sendRequest from "./send-request";

const BASE_URL = "/api/workouts";

// Retrieve an unpaid order for the logged in user
export function getWorkout() {
  return sendRequest(BASE_URL);
}

// Add an item to the cart
export function addExerciseToWorkout(exerciseId) {
  // Just send exerciseId for best security (no pricing)
  return sendRequest(`${BASE_URL}/workout/exercises/${exerciseId}`, "POST");
}

export function removeExerciseFromWorkout(exerciseId) {
  return sendRequest(`${BASE_URL}/workout/exercises/${exerciseId}`, "DELETE", {
    exerciseId,
  });
}
