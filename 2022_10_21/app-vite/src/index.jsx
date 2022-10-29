import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import Hangman from "./components/Hangman";
import RecipeContainer from "./components/RecipeContainer";

const App = () => (
  <React.StrictMode>
    <div className="app">
      {/* <Form /> */}
      {/* <RecipeContainer /> */}
      <Hangman />
    </div>
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById("root"));
