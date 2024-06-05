import React from "react";

interface UpgradeIconProps {
  height?: string;
  width?: string;
  fill?: string;
}

const UpgradeIcon: React.FC<UpgradeIconProps> = ({
  height = "100%",
  width = "100%",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    viewBox="0 0 24 28"
  >
    <path
      fill="currentColor"
      d="m5.07 12.55.96 1.29 5.93-4.45 5.93 4.45.96-1.29-6.89-5.18zm0 4.85.96 1.29 5.93-4.45 5.93 4.45.96-1.29-6.89-5.18zM12 0 0 7v14l12 7 12-7V7zm10.4 20.07L12 26.14 1.6 20.07V7.94L12 1.87l10.4 6.07z"
    />
  </svg>
);

export default UpgradeIcon;
