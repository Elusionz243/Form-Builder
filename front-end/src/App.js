import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import FormBuilder from "./components/forms/FormBuilder";

import "./App.scss";

function App() {
  const [formBuilderData, setFormBuilderData] = useState({});

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Dashboard />
        </div>
      ),
    },
    {
      path: "/form-builder",
      element: (
        <div>
          <FormBuilder formData={formBuilderData} />
        </div>
      ),
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <a href="/" className="App-header-title">
          Hazel Sky Form Builder
        </a>
      </header>
      <main className="App-main">
        <RouterProvider router={router} />
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
