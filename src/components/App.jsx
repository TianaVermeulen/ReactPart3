import React from "react";
import Login from "./Login";

var isLoggedIn = true;
var currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
    {/* Ternary}
    {/* {isLoggedIn === true ? <h1>Hello</h1> : <Login />} */}
    {/* AND Operator */}
    {currentTime > 11 && <h1>Why are you still working?</h1>}
    
    
    </div>
  );
};

export default App;
