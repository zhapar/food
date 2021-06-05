import React, { useEffect, useState, useRef } from "react";
import "../styles/circleProgress.scss";

const CircleProgress = ({ percentage, colour }) => {
  const pct = percentage;
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <div>
      <svg width={180} height={180}>
        <g transform={`rotate(-90 ${"100 100"})`}>
          <circle
            r={48}
            cx={110}
            cy={90}
            fill="transparent"
            stroke={strokePct !== circ ? colour : "#252836"}
            strokeWidth={"0.8rem"}
            strokeDasharray={circ}
            strokeDashoffset={pct ? strokePct : 0}
            strokeLinecap="round"
          ></circle>

          <circle
            r={60}
            cx={110}
            cy={90}
            fill="transparent"
            stroke={strokePct !== circ ? colour : "#393C49"}
            strokeWidth={"0.8rem"}
            strokeDasharray={circ}
            strokeDashoffset={pct ? strokePct : 0}
            strokeLinecap="round"
          ></circle>
          <circle
            r={60}
            cx={110}
            cy={90}
            fill="transparent"
            stroke={strokePct !== circ ? colour : "#FF7CA3"}
            strokeWidth={"0.8rem"}
            strokeDasharray={circ}
            strokeDashoffset="250"
            strokeLinecap="round"
          ></circle>

          <circle
            r={72}
            cx={110}
            cy={90}
            fill="transparent"
            stroke={strokePct !== circ ? colour : "#252836"}
            strokeWidth={"0.8rem"}
            strokeDasharray={circ}
            strokeDashoffset={-200}
            strokeLinecap="round"
          ></circle>
          <circle
            r={72}
            cx={110}
            cy={90}
            fill="transparent"
            stroke={strokePct !== circ ? colour : "#FFB572"}
            strokeWidth={"0.8rem"}
            strokeDasharray={circ}
            strokeDashoffset="180"
            strokeLinecap="round"
          ></circle>

          <circle
            r={84}
            cx={110}
            cy={90}
            fill="transparent"
            stroke={strokePct !== circ ? colour : "#393C49"}
            strokeWidth={"0.8rem"}
            strokeDasharray={circ}
            strokeDashoffset={-200}
            strokeLinecap="round"
          ></circle>
          <circle
            r={84}
            cx={110}
            cy={90}
            fill="transparent"
            stroke={strokePct !== circ ? colour : "#65B0F6"}
            strokeWidth={"0.8rem"}
            strokeDasharray={circ}
            strokeDashoffset="100"
            strokeLinecap="round"
          ></circle>
        </g>
      </svg>
    </div>
  );
};

export default CircleProgress;
