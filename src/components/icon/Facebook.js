import React from "react";

const Facebook = ({ className, height, width }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.66731 13.7104V24H14.7177V13.7592H18.1653L19 9.48987H14.7539V6.35828C14.7539 5.92559 14.9867 5.34772 15.6938 5.34772H18.1479V1H13.5646C11.9836 1 9.64991 2.92984 9.64991 4.98188V9.36913H7V13.6924L9.66731 13.7104Z"
      />
    </svg>
  );
};

export { Facebook };
