import { n, multi } from "../misc.js";

export function drawNumbers() {
  console.log("start draw numbers");
  const g = document.querySelector("svg.multi-svg g.numbers");
  if (!g) {
    throw new Error("svg not found.");
  }

  // big circle attributes.
  const x = -5;
  const y = -5;
  const r = 100 + 10;

  for (let i = 0; i < n; i++) {
    const angleDegree = (i * 360) / n;
    const angleRad = (angleDegree * Math.PI) / 180;
    const cx = x + r * Math.sin(angleRad);
    const cy = y + r * Math.cos(angleRad);
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("transform", `translate(${cx},${cy})`);
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", 0);
    text.setAttribute("y", 0);
    text.setAttribute("transform", "scale(1,-1)");
    text.textContent = "" + i;
    group.appendChild(text);
    g.appendChild(group);
  }
}
