import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchApi":
      return (state = action.payload);
    default:
      return state;
  }
};

export default function AxiosFetch() {
  const [state, dispatch] = useReducer(reducer, initialState);

  let instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });
  useEffect(() => {
    instance
      .get("/posts")
      .then((res) => res)
      .then((res) => dispatch({ type: "fetchApi", payload: res.data }));
  }, []);

  console.log(state[0]?.data);

  return (
    <div>
      {state?.map((element, index) => (
        <ul>
          <li>{element.userId}</li>
          <li>{element.id}</li>
          <li>{element.title}</li>
          <li>{element.body}</li>
        </ul>
      ))}
    </div>
  );
}
