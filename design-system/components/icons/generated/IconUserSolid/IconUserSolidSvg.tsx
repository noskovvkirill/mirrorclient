import * as React from "react";

import { IconProps } from "../../types";

export const IconUserSolidSvg = ({ title, titleId, ...props }: IconProps) => (
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
      d="M12 10.4c.796 0 1.559-.337 2.121-.937.563-.6.879-1.414.879-2.263s-.316-1.663-.879-2.263A2.908 2.908 0 0012 4c-.796 0-1.559.337-2.121.937A3.311 3.311 0 009 7.2c0 .849.316 1.663.879 2.263.562.6 1.325.937 2.121.937zM5 20c0-.98.181-1.951.533-2.857A7.518 7.518 0 017.05 14.72a6.987 6.987 0 012.271-1.618A6.623 6.623 0 0112 12.533c.92 0 1.83.194 2.679.569.85.375 1.62.925 2.27 1.618a7.516 7.516 0 011.518 2.423C18.82 18.048 19 19.02 19 20H5z"
      fill="currentColor"
    />
  </svg>
);
