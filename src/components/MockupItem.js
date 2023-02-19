import { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";

const Preview = (props) => {
  const [canvas, setCanvas] = useState(null);

  const canvasRef = useRef();

  const { imgUrl, snapshot } = props;

  console.log(props.id, props.side);

  useEffect(() => {
    const canvas = new fabric.StaticCanvas(canvasRef.current, {
      width: 150,
      height: 200
    });

    setCanvas(canvas);
  }, []);

  useEffect(() => {
    if (!snapshot) {
      return;
    }

    canvas?.loadFromJSON(snapshot, renderAll);

    function renderAll() {
      canvas?.renderAll();
    }
  }, [canvas, snapshot]);

  return (
    <div className="container">
      <img id="bgp" src={imgUrl} />

      <div class="canvas-container">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default Preview;
