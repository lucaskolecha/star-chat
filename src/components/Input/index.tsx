import React from 'react';

interface Props {
  value: any;
  onChange: any;
  label?: string;
  type?: string;
  disabled?: boolean;
}

const Input: React.FC<Props> = ({ value, onChange, label, type = 'text', disabled }) => {
  return (
    <>
      {label && <label className="mt-3 mb-2 text-white">{label}</label>}
      <input
        type={type}
        className="h-12 w-full rounded-md px-4 bg-input border text-white"
        disabled={disabled !== undefined ? disabled : false}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
