import React from 'react';

function Arrow() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="blue"
        style={{ width: '25px', height: '25px', cursor: 'pointer' }}
      >
        <path
          fillRule="evenodd"
          d="M11.47 2.47a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06l-2.47-2.47V21a.75.75 0 01-1.5 0V4.81L8.78 7.28a.75.75 0 01-1.06-1.06l3.75-3.75z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default Arrow;
