import React, { useState } from "react";

import "./FormBuilder.scss";

export default function FormBuilder({ formData }) {
  const [fields, setFields] = useState([]);

  return (
    <div className="form-builder">
      <div className="form-builder-header">
        <h2>Create a form</h2>
        <h4>Use the fields below to start building your form!</h4>
      </div>
    </div>
  );
}
