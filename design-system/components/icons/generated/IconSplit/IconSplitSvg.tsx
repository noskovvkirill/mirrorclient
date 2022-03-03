import * as React from "react";

import { IconProps } from "../../types";

export const IconSplitSvg = ({ title, titleId, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    focusable="false"
    shapeRendering="geometricPrecision"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M21 3l-6 6-3 3H3m12-9h6-6zm6 0v6-6zm0 18l-6-6m0 6h6-6zm6 0v-6 6z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
