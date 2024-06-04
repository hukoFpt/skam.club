import React from "react";

interface CloseIconProps {
  width?: string;
  height?: string;
  fill?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({
  width = "100%",
  height = "100%",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15 15"
    width={width}
    height={height}
    fill="currentColor"
  >
    <path
      fill="currentColor"
      d="M0 2.1 2.1 0l5.4 5.4L12.9 0 15 2.1 9.6 7.5l5.4 5.4-2.1 2.1-5.4-5.4L2.1 15 0 12.9l5.4-5.4z"
    />
  </svg>
);

export default CloseIcon;
