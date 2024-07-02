import React from "react";
import "bulma/css/bulma.css";

function FormField(props) {
  return (
    <div className="field column is-one-third container">
      <label className="label level-left">{props.label}</label>
      <div className="control">
        <input type={props.type} className="input" placeholder={props.placeholder} />
      </div>
    </div>
  );
}

export default FormField;