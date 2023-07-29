import { useState } from "react";

import axios from "axios";

import Header from "../header";

import "./index.css";

const NewPage = () => {
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");

  const [msg, setMsg] = useState("");

  const successView = (msg) => {
    setMsg(msg);
  };
  const failureView = (msg) => {
    setMsg(msg);
  };

  const makeApi = async (event) => {
    event.preventDefault();

    const object = {
      category,
      language,
    };

    const url = "https://hoblist.com/api/movieList";

    axios
      .post(url, object)
      .then((response) => {
        console.log(response);
        if (response.ok === true) {
          successView(response.text);
        } else {
          failureView(response.text);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setMsg("data posted succesfully");
  };

  return (
    <div className="container_a">
      <Header />
      <form onSubmit={(e) => makeApi(e)} className="container">
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="inputElement"
          type="text"
          placeholder="Enter Category"
        />
        <input
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="inputElement"
          type="text"
          placeholder="Enter Language"
        />
        <button className="button" type="submit">
          submit
        </button>
      </form>
      <h1 className="msg">{msg}</h1>
    </div>
  );
};

export default NewPage;
