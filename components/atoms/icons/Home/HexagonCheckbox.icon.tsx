import React from "react";

interface HexagonCheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  size?: number;
  strokeColor?: string;
  fillColor?: string;
  checkmarkColor?: string;
}

const HexagonCheckbox: React.FC<HexagonCheckboxProps> = ({
  checked = false,
  onChange,
  className = "",
  size = 26,
  checkmarkColor = "#4af1b8",
}) => {
  const handleClick = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <div className={`inline-block cursor-pointer ${className}`} onClick={handleClick}>
      <svg
        className="checkbox__hexagon transition-all duration-200"
        viewBox="0 0 26 26"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <path
          className="checkbox__hexagon-background"
          d="M2.74167 7.07735L13 1.1547L23.2583 7.07735V18.9226L13 24.8453L2.74167 18.9226V7.07735Z"
          fill="#1b192f"
        />

        {/* Stroke */}
        <path
          className="checkbox__hexagon-stroke"
          d="M2.74167 7.07735L13 1.1547L23.2583 7.07735V18.9226L13 24.8453L2.74167 18.9226V7.07735Z"
          stroke={checked ? "#4af1b8" : "#3b3762"}
          strokeWidth={checked ? "2" : "2"}
          fill={checked ? "#1a2633" : "transparent"}
        />
        {checked && (
          <path
            className="checkbox__hexagon-checkmark animate-in fade-in duration-200"
            d="M18.8643 9.9704L17.7396 8.80078L11.915 14.8577L8.82201 11.6204L7.69727 12.79L11.915 17.1761L18.8643 9.9704Z"
            fill={checkmarkColor}
          />
        )}
      </svg>
    </div>
  );
};

export default HexagonCheckbox;
