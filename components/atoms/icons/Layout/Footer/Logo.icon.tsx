import React from "react";

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 130 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 15h90c8.284 0 15 6.716 15 15v60c0 8.284-6.716 15-15 15H20c-8.284 0-15-6.716-15-15V30c0-8.284 6.716-15 15-15z"
      fill="currentColor"
    />
    <path
      d="M35 40h20v8H35v-8zM75 40h20v8H75v-8zM35 55h60v8H35v-8zM35 70h40v8H35v-8z"
      fill="white"
    />
  </svg>
);

export default Logo;