import * as React from "react";

import "./App.scss";

import NavBar from "./containers/NavBar";
import Main from "./containers/Main";
import Footer from "./containers/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
