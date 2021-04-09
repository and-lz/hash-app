import React, { useState } from 'react';

interface InputProps {
  type?: "text" | "number"
  required?: boolean
  label: string
  addon?: string,
  value?: string,
  onChange: Function
}

function Input({ type = 'text', label, required, addon, value, onChange }: InputProps) {
  return <>
    <label>{label} {required && "*"}</label> <br />
    <input required={required} value={value} onChange={e => onChange(e.currentTarget.value)} type={type} /> <br />
    {addon && <div>{addon}</div>}
    <hr />
  </>
}

export default Input;
