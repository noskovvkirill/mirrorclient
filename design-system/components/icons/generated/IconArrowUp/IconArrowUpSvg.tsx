import * as React from "react";

import { IconProps } from "../../types";

export const IconArrowUpSvg = ({ title, titleId, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    focusable="false"
    shapeRendering="geometricPrecision"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 10l7-7m0 0l7 7m-7-7v18"
    />
  </svg>
);
