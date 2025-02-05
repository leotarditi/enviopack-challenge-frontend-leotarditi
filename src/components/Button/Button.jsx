import React from "react";
import "./Button.css";

export default function Button({ children, className, onClick, disabled }) {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
}