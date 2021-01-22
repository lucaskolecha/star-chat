import React from 'react';

interface Props {
  label: string;
  className?: any;
  onClick: any;
}

const Button: React.FC<Props> = ({ label, onClick, className }) => {
  const defaultClass = `h-12 mt-12 rounded-md bg-primary text-white`;
  return (
    <button className={`${className} ${defaultClass}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
