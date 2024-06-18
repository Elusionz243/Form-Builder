import React, { useState } from "react";

import "./Dashboard.scss";

export default function Dashboard() {
  const [formList, setFormList] = useState([]);

  return (
    <div className="Dashboard">
      <div className="App-main-toolbar">
        <a href="/form-builder" className="btn btn-primary">
          <i class="bi bi-plus-circle" /> Create Form
        </a>
      </div>
      <section className="App-main-section">
        <h2 className="App-main-section-title">Forms</h2>
        <table className="App-main-section-forms scrollbar">
          {formList.length > 0 ? (
            formList.map((form) => <tr>{form}</tr>)
          ) : (
            <div className="App-main-section-forms-empty">
              <h3>No forms found!</h3>
              <h5>Click the button above to create a new form</h5>
            </div>
          )}
        </table>
      </section>
    </div>
  );
}
