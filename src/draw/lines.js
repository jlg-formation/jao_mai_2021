import {n, multi} from '../misc.js';

export function drawLines() {
  const g = document.querySelector('svg.multi-svg g.lines');
  if (!g) {
    throw new Error('svg not found.');
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
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    g.appendChild(line);
  }
}
