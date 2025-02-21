import React from 'react';
import './btn.css';
import { FaPlus } from "react-icons/fa";

export default function Buttons({ title, onAdd }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();

        onAdd();

      }}
      className='blue-button'
    >
      Save <FaPlus />
    </button>
  );
}
