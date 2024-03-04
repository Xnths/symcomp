import * as React from "react"
const DownArrow = (props, fill) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 31 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.636 11.667L27.303 0l3.333 3.333-15 15-15-15L3.969 0l11.667 11.667z"
      fill={fill}
    />
  </svg>
)
export default DownArrow