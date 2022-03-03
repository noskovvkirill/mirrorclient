import * as React from "react";

import { IconProps } from "../../types";

export const IconUsersSolidSvg = ({ title, titleId, ...props }: IconProps) => (
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
      d="M11 8a3 3 0 11-6 0 3 3 0 016 0zm8 0a3 3 0 11-5.999 0A3 3 0 0119 8zm-4.07 11c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0121 18v1h-6.07zM8 13a5 5 0 015 5v1H3v-1a5 5 0 015-5z"
      fill="currentColor"
    />
  </svg>
);
