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

  function App() {
    const [contact, setContact] = useState({
      fName: "",
      lName: "",
      email: ""
    });
  
    return (
      <div className="container">
        <h1>
          Hello {contact.fName} {contact.lName}
        </h1>
        <p>{contact.email}</p>
        <form>
          <input name="fName" placeholder="First Name" />
          <input name="lName" placeholder="Last Name" />
          <input name="email" placeholder="Email" />
          <button>Submit</button>
        </form>
      </div>
    );
  }

export default App;
