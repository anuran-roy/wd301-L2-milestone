import React, { useState } from "react";
import AppContainer from "./components/AppContainer";
import Header from "./components/Header";
import Form from "./components/Form";
import Home from "./components/Home";

function App() {
  const [state, setState] = useState("HOME");

  const openForm = () => {
    setState("FORM");
  };

  const closeForm = () => {
    setState("HOME");
  };

  return (
    <AppContainer>
      <Header
        title={`Welcome to Lesson ${
          4 + 1
        } of #react-typescript with #tailwindcss`}
      />

      {state === "HOME" ? (
        <>
          <Home openFormCB={openForm} />
          <button
            className="rounded-xl bg-blue-500 px-3 py-2 font-bold text-white"
            onClick={openForm}
          >
            Open Form
          </button>
        </>
      ) : (
        <>
          <Form closeFormCB={closeForm} />
        </>
      )}
    </AppContainer>
  );
}

export default App;
