import React from "react";
import "./prompt.css";

export default function BlockTitle({ title, isSelected, onClick }) {
  return (
    <div
      className={`prompt cursor-pointer ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <h1>{title}</h1>
    </div>
  );
}
