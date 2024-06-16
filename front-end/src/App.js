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
      component: () => (
        <div>
          <Dashboard />
        </div>
      ),
    },
    {
      path: "/form-builder",
      component: () => (
        <div>
          <FormBuilder formData={formBuilderData} />
        </div>
      ),
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">Hazel Sky Form Builder</header>
      <main className="App-main">
        <RouterProvider router={router} />
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
