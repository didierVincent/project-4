// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from "./send-request";
const BASE_URL = "/api/users";

export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

// created this to try retrieve new user data... didnt work
export function fetchData() {
  return sendRequest(`${BASE_URL}/fetch-data`);
}

export function updateFatigue() {
  return sendRequest(`${BASE_URL}/update-fatigue`, "POST");
}
