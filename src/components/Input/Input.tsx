import React from 'react';

interface InputProps {
  type?: "text" | "number"
  required?: boolean
  label: string
  addon?: string
}

function Input({ type = 'text', label, required, addon }: InputProps) {
  return <>
    <label>{label} {required && "*"}</label> <br />
    <input required={required} type={type} /> <br />
    {addon && <span>{addon}</span>}
  </>
}

export default Input;
