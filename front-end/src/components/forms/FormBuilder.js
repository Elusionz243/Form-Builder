import React, { useState } from "react";

import "./FormBuilder.scss";

export default function FormBuilder({ formData }) {
  const exampleFormStructure = [
    {
      name: "First Name",
      placeholder: "John",
      type: "text",
      required: true,
    },
    {
      name: "Last Name",
      placeholder: "Doe",
      type: "text",
      required: true,
    },
    {
      name: "Email",
      placeholder: "johndoe@email.com",
      type: "email",
      required: true,
    },
  ];

  const [fields, setFields] = useState([...exampleFormStructure]);
  return (
    <div className="form-builder">
      <div className="form-builder-header">
        <h2>Create a form</h2>
        <h4>Use the fields below to start building your form!</h4>
      </div>
      <div className="form-builder-fields">
        {fields.map((field, index) => (
          <div className="form-builder-field" key={`${field}-${index}`}>
            <div className="form-builder-field-label">Name: {field.name}</div>
            <div className="form-builder-field-type">Type: {field.type}</div>
            <div className="form-builder-field-required">
              Required: {field.required}
            </div>
            <div className="form-builder-field-placeholder">
              Placeholder: {field.placeholder}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
