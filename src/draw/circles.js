import { n } from "../misc.js";

export default function drawCircles() {
  console.log("start draw circle");
  const g = document.querySelector("svg.multi-svg g.points");
  if (!g) {
    throw new Error("svg not found.");
  }

  // big circle attributes.
  const x = 0;
  const y = 0;
  const r = 100;

  for (let i = 0; i < n; i++) {
    const angleDegree = (i * 360) / n;
    const angleRad = (angleDegree * Math.PI) / 180;
    const cx = x + r * Math.sin(angleRad);
    const cy = y + r * Math.cos(angleRad);
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", 3);
    g.appendChild(circle);
  }
}
