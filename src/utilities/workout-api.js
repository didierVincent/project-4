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

export function resetWorkout() {
  return sendRequest(`${BASE_URL}/workout/delete`, "DELETE");
}

export function changeExerciseQty(exerciseId, newQty) {
  return sendRequest(`${BASE_URL}/workout/qty`, "PUT", {
    exerciseId,
    newQty,
  });
}

export function saveWorkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/workout/save`, "POST");
}

export function getWorkoutHistory() {
  return sendRequest(`${BASE_URL}/workout/saved-workouts`);
}

export function addRestDay() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/workout/add-rest-day`, "POST");
}
