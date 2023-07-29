import { Routes, Route } from "react-router-dom";

import SignUpPage from "./component/signUpPage/";
import LoginPage from "./component/loginPage";
import NewPage from "./component/newPage";

const App = () => (
  <Routes>
    <Route exact path="/" element={<SignUpPage />} />
    <Route exact path="/login" element={<LoginPage />} />
    <Route exact path="/success" element={<NewPage />} />
  </Routes>
);

export default App;
