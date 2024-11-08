import * as React from "react";

const BrandIcon = ({ width = "160", height = "29.039", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`} // Correctly set the viewBox
    {...props} // Spread other props if needed
  >
    <g
      id="Group_4989"
      fill="#665cd7"
      data-name="Group 4989"
      transform="translate(-24 -58.581)"
    >
      <text
        id="Atomic_Signals"
        data-name="Atomic Signals"
        fontFamily="Poppins-SemiBold, Poppins"
        fontSize="16"
        fontWeight="600"
        transform="translate(61 79)"
      >
        <tspan x="0" y="0">
          Atomic Signals
        </tspan>
      </text>
      <path
        id="icons8-star-trek"
        d="M32 18.87c0-4.031-3.749-7.689-9.344-9.139a39 39 0 0 0-4.095-6.4A.486.486 0 0 0 18.04 3a.47.47 0 0 0-.493.29 32.3 32.3 0 0 0-4.055 6.227C7.306 10.688 3 14.516 3 18.87c0 3.093 2.124 5.93 5.837 7.83-.183 1.464-.309 3.032-.444 4.795a.556.556 0 0 0 .548.548h.135a.434.434 0 0 0 .476-.272c.871-1.144 1.905-2.476 3.013-3.737a20.6 20.6 0 0 0 4.935.566 19.5 19.5 0 0 0 7.7-1.532c.415.62.8 1.276 1.214 1.967l.328.551c.042.186.2.365.671.365a.56.56 0 0 0 .545-.584 544 544 0 0 0-.381-3.5C30.391 24.08 32 21.541 32 18.87m-8.132-6.628c3.727 1.431 6.092 3.977 6.092 6.628a6.3 6.3 0 0 1-2.778 4.783 52 52 0 0 0-2.008-8 43 43 0 0 0-1.305-3.41Zm-3.834 9.423a2.7 2.7 0 0 1 .876-.36c.012 0 .131.051.418.4a88 88 0 0 0 1.727 2.356c.339.452.685.914 1.039 1.4a19.8 19.8 0 0 1-6.594 1.163 18.7 18.7 0 0 1-3.3-.276 26.3 26.3 0 0 1 5.542-4.536Zm-7.649-9.831a41 41 0 0 0-1.622 4.787 62 62 0 0 0-1.629 7.861c-2.574-1.39-4.1-3.462-4.1-5.61.006-2.953 2.929-5.726 7.352-7.038Z"
        transform="translate(20.999 55.58)"
      ></path>
    </g>
  </svg>
);

export default BrandIcon;
