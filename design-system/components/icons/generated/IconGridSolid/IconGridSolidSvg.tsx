import * as React from "react";

import { IconProps } from "../../types";

export const IconGridSolidSvg = ({ title, titleId, ...props }: IconProps) => (
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
      d="M4.857 2A2.857 2.857 0 002 4.857v2.857a2.857 2.857 0 002.857 2.857h2.857a2.857 2.857 0 002.857-2.857V4.857A2.857 2.857 0 007.714 2H4.857zm0 11.429A2.857 2.857 0 002 16.286v2.857A2.857 2.857 0 004.857 22h2.857a2.857 2.857 0 002.857-2.857v-2.857a2.857 2.857 0 00-2.857-2.857H4.857zm8.572-8.572A2.857 2.857 0 0116.286 2h2.857A2.857 2.857 0 0122 4.857v2.857a2.857 2.857 0 01-2.857 2.857h-2.857a2.857 2.857 0 01-2.857-2.857V4.857zm0 11.429a2.857 2.857 0 012.857-2.857h2.857A2.857 2.857 0 0122 16.286v2.857A2.857 2.857 0 0119.143 22h-2.857a2.857 2.857 0 01-2.857-2.857v-2.857z"
      fill="currentColor"
    />
  </svg>
);
