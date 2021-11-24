import React, { useState } from "react";

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

//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events
function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handelChange(event) {
    const { value, name } = event.target;

    setContact((prevValue) => {
      return {
      ...prevValue,
      [name]:value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" 
        onChange={handelChange} 
        placeholder="First Name" 
        value={contact.fName} />
        <input name="lName" 
        onChange={handelChange} 
        placeholder="Last Name" 
        value={contact.lName} />
        <input name="email" 
        onChange={handelChange} 
        placeholder="Email" 
        value={contact.email} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
