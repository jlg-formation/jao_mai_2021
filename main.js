import drawCircles, { n } from "./src/drawCircles.js";

console.log("toto");

const multi = 2;

function drawNumbers() {
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

function drawLines() {
  console.log("start draw numbers");
  const g = document.querySelector("svg.multi-svg g.lines");
  if (!g) {
    throw new Error("svg not found.");
  }

  // big circle attributes.
  const x = 0;
  const y = 0;
  const r = 100;

  for (let i = 0; i < n; i++) {
    const startAngleDegree = (i * 360) / n;
    const startAngleRad = (startAngleDegree * Math.PI) / 180;
    const endAngleDegree = startAngleDegree * multi;
    const endAngleRad = (endAngleDegree * Math.PI) / 180;
    const x1 = x + r * Math.sin(startAngleRad);
    const y1 = y + r * Math.cos(startAngleRad);
    const x2 = x + r * Math.sin(endAngleRad);
    const y2 = y + r * Math.cos(endAngleRad);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    g.appendChild(line);
  }
}

drawCircles();
drawNumbers();
drawLines();
