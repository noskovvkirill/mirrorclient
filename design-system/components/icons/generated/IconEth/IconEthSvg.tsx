import * as React from "react";

import { IconProps } from "../../types";

export const IconEthSvg = ({ title, titleId, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    shapeRendering="geometricPrecision"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.414 13.684l5.631 8.024c.1.142.31.142.41 0l5.621-8.02-5.628 2.427-.198.086-.198-.086-5.638-2.43zm-.287-1.212l6.123 2.64 6.094-2.628L12.465 2.37a.25.25 0 00-.431 0l-5.907 10.1z"
      fill="currentColor"
    />
  </svg>
);
