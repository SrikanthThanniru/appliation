import { useState } from "react";

import { Link } from "react-router-dom";

import "./index.css";

const professionals = [
  {
    id: 1,
    profession: "director",
    text: "Director",
  },
  {
    id: 2,
    profession: "producer",
    text: "Producer",
  },
  {
    id: 3,
    profession: "distributer",
    text: "Distributer",
  },
];

const SignUpPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    password: "",
    email: "",
    phoneNumber: "",
    profession: professionals[0].profession,
  });

  const [errorMsg, setErrorMsg] = useState("");

  const { name, password, email, phoneNumber, profession } = userDetails;
  console.log(profession);

  const submitDetails = (event) => {
    event.preventDefault();

    // localStorage.setItem("userDetails", userDetails);

    if (name === "" || password === "" || email === "" || phoneNumber === "") {
      setErrorMsg("Please Provide all the details");
    } else {
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      setErrorMsg("Go to Login");
    }
  };
  console.log(errorMsg);

  return (
    <div className="full-container">
      <form onSubmit={(e) => submitDetails(e)} className="container">
        <h1 className="heading">Registration Form</h1>
        <input
          onChange={(e) => {
            setUserDetails((prevObject) => ({
              ...prevObject,
              name: e.target.value,
            }));
          }}
          value={name}
          className="inputElement"
          type="text"
          placeholder="Enter Your Name"
        />
        <input
          onChange={(e) => {
            setUserDetails((prevObject) => ({
              ...prevObject,
              password: e.target.value,
            }));
          }}
          value={password}
          className="inputElement"
          type="password"
          placeholder="Enter Your Password"
        />
        <input
          onChange={(e) => {
            setUserDetails((prevObject) => ({
              ...prevObject,
              email: e.target.value,
            }));
          }}
          value={email}
          className="inputElement"
          type="text"
          placeholder="Enter Your Email"
        />
        <input
          onChange={(e) => {
            setUserDetails((prevObject) => ({
              ...prevObject,
              phoneNumber: e.target.value,
            }));
          }}
          value={phoneNumber}
          className="inputElement"
          type="text"
          placeholder="Enter Your Phone Number"
        />
        <select
          onChange={(e) => {
            setUserDetails((prevObject) => ({
              ...prevObject,
              profession: e.target.value,
            }));
          }}
          value={profession}
          className="drop-down"
        >
          {professionals.map((o) => (
            <option className="values" key={o.id} value={o.profession}>
              {o.text}
            </option>
          ))}
        </select>
        <button type="submit">submit</button>
        <p className="error-msg">{errorMsg}</p>
      </form>
      <div className="bottom-container">
        <p className="text">Have an Account ? </p>
        <Link className="login-button" to="/login">
          Login In
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
