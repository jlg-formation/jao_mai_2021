import drawCircles from "./src/draw/circles.js";
import { drawLines } from "./src/draw/lines.js";
import { drawNumbers } from "./src/draw/text.js";

const redraw = () => {
  drawCircles();
  drawNumbers();
  drawLines();
};

const main = () => {
  redraw();
};

main();
