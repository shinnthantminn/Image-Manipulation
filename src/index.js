import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import App from "./App";
import { fabric } from "fabric";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

/*
 * Add Delete Control
 */
var img = new Image();
img.src = "./delete-button.svg";

fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: -0.5,
  y: 0.25,
  cursorStyle: "pointer",
  mouseUpHandler: deleteObject,
  render: renderIcon,
  cornerSize: 24
});

function deleteObject(_, transform) {
  var target = transform.target;
  var canvas = target.canvas;
  canvas.remove(target);
  canvas.requestRenderAll();
}

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
  var size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.drawImage(img, -size / 2, -size / 2, size, size);
  ctx.restore();
}
