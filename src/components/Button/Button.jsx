import React from "react";
import "./Button.css";

export default function Button({ children, className, onClick }) {
  return <button onClick={onClick} className={className}>{children}</button>;
}