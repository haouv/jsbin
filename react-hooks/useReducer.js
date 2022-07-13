import { StrictMode, useState, useReducer } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function reducer(state, action) {
  console.log("state", state, action.type);
  switch (action.type) {
    case "patch":
      return { ...state, ...action.formData };
    default:
      throw new Error("dddddd");
  }
}

const initialData = {
  name: "wuhao",
  age: 18,
  nationnality: "汉族"
};

const Form = () => {
  const [formData, dispatch] = useReducer(reducer, initialData);
  return (
    <form>
      <div>
        <label>
          姓名
          <input
            value={formData.name}
            onChange={(e) => {
              dispatch({ type: "patch", formData: { name: e.target.value } });
            }}
          ></input>
        </label>
      </div>
      <div>
        <label>
          年龄
          <input
            value={formData.age}
            onChange={(e) => {
              dispatch({ type: "patch", formData: { age: e.target.value } });
            }}
          ></input>
        </label>
      </div>
      <div>
        <label>
          民族
          <input
            value={formData.nationnality}
            onChange={(e) => {
              dispatch({ type: "patch", formData: { nationnality: e.target.value } });
            }}
          ></input>
        </label>
      </div>
      <div>{JSON.stringify(formData)}</div>
    </form>
  );
};
root.render(
  <StrictMode>
    <Form />
  </StrictMode>
);
