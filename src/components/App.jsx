// import React, { useState } from "react";

// const [fullName, setFullName] = useState({
//   fName: "",
//   lName: ""
// });

// function handleChange(event) {
//   const {value, name} = event.target;

//   setFullName((prevValue) => {
//     if (name === "fName") {
//       return {
//         fName: value,
//         lName: prevValue.lName
//       }
//     } else if (name === "lName"){
//       return {
//         fName: prevValue.fName,
//         lName: value
//       }
//     }
//   });


// function App() {
//   const [contact, setContact] = useState({
//     fName: "",
//     lName: "",
//     email: ""
//   });

//   function handelChange(event) {
//     const { value, name } = event.target;

//     setContact((prevValue) => {
//       return {
//       ...prevValue,
//       [name]:value
//       };
//     });
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {contact.fName} {contact.lName}
//       </h1>
//       <p>{contact.email}</p>
//       <form>
//         <input name="fName" 
//         onChange={handelChange} 
//         placeholder="First Name" 
//         value={contact.fName} />
//         <input name="lName" 
//         onChange={handelChange} 
//         placeholder="Last Name" 
//         value={contact.lName} />
//         <input name="email" 
//         onChange={handelChange} 
//         placeholder="Email" 
//         value={contact.email} />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;


//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

import React from "react";

function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" />
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
