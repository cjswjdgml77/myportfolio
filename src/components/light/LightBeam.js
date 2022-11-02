import { useEffect } from "react";

export const LightBeam = ({ vividcolor }) => {
  useEffect(() => {}, [vividcolor]);
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 353 2000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_46_927)">
        <path
          d="M154.947 2000L11.9846 7.96814H339.926L223.155 2000H154.947Z"
          fill="url(#paint0_linear_46_927)"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_46_927"
          x="11.9846"
          y="7.96814"
          width="327.941"
          height="1996.03"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_46_927"
          />
        </filter>
        <linearGradient
          id="paint0_linear_46_927"
          x1="175.955"
          y1="7.96814"
          x2="175.955"
          y2="2000"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="1" stop-color={vividcolor} />
        </linearGradient>
      </defs>
    </svg>
  );
};
