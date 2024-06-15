import React, { useState } from "react";

import "./App.scss";

function App() {
  const [formList, setFormList] = useState([]);
  const [formBuilderData, setFormBuilderData] = useState({});

  return (
    <div className="App">
      <header className="App-header">Hazel Sky Form Builder</header>
      <main className="App-main">
        <div className="App-main-toolbar">
          <button className="btn btn-primary">
            <i class="bi bi-plus-circle" /> Create Form
          </button>
        </div>
        <section className="App-main-section">
          <h2 className="App-main-section-title">Forms</h2>
          <table className="App-main-section-forms scrollbar">
            {formList.length > 0 ? (
              formList.map((form) => <div>{form}</div>)
            ) : (
              <div className="App-main-section-forms-empty">
                <h3>No forms found!</h3>
                <h5>Click the button above to create a new form</h5>
              </div>
            )}
          </table>
        </section>
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
