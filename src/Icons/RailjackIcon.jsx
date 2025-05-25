import React from 'react';

const RailjackIcon = ({color = '#ffffff', size = '24'}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12L5 10L7 12L21 12L19 10L17 12L21 8L19 6L17 8L7 8L5 6L3 8L3 12Z"
        fill={color}
      />
      <path
        d="M3 16L5 14L7 16L21 16L19 14L17 16L21 12L19 10L17 12L7 12L5 10L3 12L3 16Z"
        fill={color}
      />
      <circle cx="12" cy="12" r="2" fill={color} />
      <path
        d="M2 18L4 16L6 18L22 18L20 16L18 18L18 20L6 20L6 18Z"
        fill={color}
      />
    </svg>
  );
};

export default RailjackIcon;
