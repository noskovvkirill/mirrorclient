import * as React from "react";

import { IconProps } from "../../types";

export const IconTokensSvg = ({ title, titleId, ...props }: IconProps) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    shapeRendering="geometricPrecision"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 5a5 5 0 00-3 9 7 7 0 017-7 4.994 4.994 0 00-4-2zm6.528 2.472A6.998 6.998 0 005.05 5.05a7 7 0 002.422 11.478l.06.15a7 7 0 108.996-9.206zm-4.441 1.909a5 5 0 113.826 9.238 5 5 0 01-3.826-9.238z"
      fill="currentColor"
    />
  </svg>
);
