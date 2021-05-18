import {State} from '../interfaces/State';
import {setAttributeNbr} from '../misc';

export default function drawCircles(state: State) {
  const sample = state.sample;
  const g = document.querySelector('svg.multi-svg g.points');
  if (!g) {
    throw new Error('svg not found.');
  }

  // big circle attributes.
  const x = 0;
  const y = 0;
  const r = 100;

  for (let i = 0; i < sample; i++) {
    const angleDegree = (i * 360) / sample;
    const angleRad = (angleDegree * Math.PI) / 180;
    const cx = x + r * Math.sin(angleRad);
    const cy = y + r * Math.cos(angleRad);
    const circle = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle',
    );
    setAttributeNbr(circle, 'cx', cx);
    setAttributeNbr(circle, 'cy', cy);
    setAttributeNbr(circle, 'r', 3);
    g.appendChild(circle);
  }
}
