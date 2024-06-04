import React from "react";

interface TopUpIconProps {
  width?: string;
  height?: string;
  fill?: string;
}

const TopUpIcon: React.FC<TopUpIconProps> = ({
  width = "100%",
  height = "100%",
}) => (
  <svg width={width} height={height} fill="currentColor" viewBox="0 0 60 50">
    <defs>
      <clipPath id="clipPolygon">
        <polygon points="45 0, 60 25, 45 50, 15 50, 0 25, 15 0" />
      </clipPath>
    </defs>
    <rect
      width="100%"
      height="100%"
      clipPath="url(#clipPolygon)"
      fill="currentColor"
    />
    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      stroke="black"
      stroke-width="2px"
      dy=".3em"
      font-size="40"
    >
      +
    </text>
  </svg>
);

export default TopUpIcon;
