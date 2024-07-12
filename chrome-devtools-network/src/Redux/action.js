import * as types from "./actionType";

export const addRequest = (request) => {
  console.log("requestheaders", request.headers);
  let type = "other";
  if (request.headers && request.headers["content-type"]) {
    const contentType = request.headers["content-type"];
    if (contentType.includes("application/json")) {
      type = "xhr";
    } else if (contentType.includes("text/css")) {
      type = "css";
    } else if (
      contentType.includes("application/javascript") ||
      contentType.includes("text/javascript")
    ) {
      type = "js";
    } else if (contentType.includes("image")) {
      type = "img";
    } else if (contentType.includes("font")) {
      type = "font";
    } else if (contentType.includes("text/html")) {
      type = "doc";
    }
  }

  return {
    type: types.ADD_REQUEST,
    payload: { ...request, type },
  };
};
