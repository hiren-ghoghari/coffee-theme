import { Icon } from "@/types/icons";
import React from "react";

const IconDownLeftArrow = ({ className }: Icon) => {
  return (
    <svg
      width="35"
      height="34"
      viewBox="0 0 35 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1_29)">
        <path
          d="M9 8.5L26 25.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.1875 25.5H26V11.6875"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_29">
          <rect
            width="34"
            height="34"
            fill="currentColor"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconDownLeftArrow;
