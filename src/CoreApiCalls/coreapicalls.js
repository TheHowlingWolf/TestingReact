import { API } from "../Backend";

export const signup = (user) => {
  console.log("API:", API);
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      console.log(`${API}`);
      return response.json();
    })
    .catch((err) => {
      console.log("error");
    });
};

export const signin = (user) => {
  //user will be json from frntend
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
//Browser forgets this json response to make the user kept signed in

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = (next) => {
  //next is used here in order to make further proceedings as next act as a middleware we can redirect user by injecting a callback from next
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt"); //Remove the token before signout
    next();

    return fetch(`${API}/signout`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    //accessing the window as jwt is stored here
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt")); //if found dont send true send the string and parse
  } else {
    return false;
  }
};
