import sendRequest from "./send-request";
const BASE_URL = "/api/muscles";

export async function getAll() {
  return sendRequest(BASE_URL);
}
