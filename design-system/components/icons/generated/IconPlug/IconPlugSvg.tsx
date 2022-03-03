import * as React from "react";

import { IconProps } from "../../types";

export const IconPlugSvg = ({ title, titleId, ...props }: IconProps) => (
  <svg
    width={24}
    height={24}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    shapeRendering="geometricPrecision"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8 8V3a1 1 0 012 0v5h4V3a1 1 0 112 0v5h2.134c.478 0 .866.409.866.913v5.71C19 18.699 15.866 22 12 22s-7-3.302-7-7.376V8.913C5 8.409 5.388 8 5.866 8H8zm4 12c2.664 0 5-2.307 5-5.376V10H7v4.624C7 17.693 9.336 20 12 20z" />
  </svg>
);
