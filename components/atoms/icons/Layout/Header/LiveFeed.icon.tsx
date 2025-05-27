import Image, { ImageProps } from "next/image";
import React from "react";

export const FireIcon = (props: Omit<ImageProps, "src" | "alt">) => (
  <Image
    src="/fire.gif"
    alt="Fire"
    width={29}
    height={38}
    style={{ objectFit: "cover", display: "inline-block", ...props.style }}
    {...props}
  />
);

export const Rarity1Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 87 84" {...props}>
    <circle cx="44" cy="42" r="31" fill="url(#a)" opacity=".4" />
    <path
      stroke="url(#b)"
      strokeWidth="2"
      d="M10.756 24.328 40.5 7.155l29.744 17.173v34.345L40.5 75.845 10.756 58.673z"
    />
    <defs>
      <radialGradient
        id="a"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(90 1 43)scale(31)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C8CCD6" />
        <stop offset="1" stopColor="#C8CCD6" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="b" x1="76" x2="13.408" y1="41.5" y2="41.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C8CCD6" />
        <stop offset="1" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
