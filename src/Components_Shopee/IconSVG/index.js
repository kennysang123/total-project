import React from "react";

function CloseSvg(props) {
  return (
    <>
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        id="i-close"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        {...props}
      >
        <path d="M2 30L30 2M30 30L2 2" />
      </svg>
    </>
  );
}
export { CloseSvg };

/* export default function IconSVG(props) {
  return (
    <>
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        id="i-close"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        {...props}
      >
        <path d="M2 30L30 2M30 30L2 2" />
      </svg>
    </>
  );
} */
