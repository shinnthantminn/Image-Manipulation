import { useEffect, useState } from "react";
import DesignCanvasList from "./components/DesignCanvasList";
import MockupList from "./components/MockupList";

import db from "./db";

const buttons = db.canvases.map((c) => c.side);

const App = () => {
  const [currentSide, setCurrentSide] = useState("front");

  const [isPreview, setIsPreview] = useState(false);

  const [snapshot, setSnapshot] = useState(() => {
    return JSON.parse(localStorage.getItem("snapshot")) || {};
  });

  useEffect(() => {
    localStorage.setItem("snapshot", JSON.stringify(snapshot));
  }, [snapshot]);

  return (
    <>
      <button onClick={() => setIsPreview((bool) => !bool)}>
        {isPreview ? "EDIT" : "PREVIEW"}
      </button>
      <br />
      <br />
      {buttons.map((btn) => (
        <button onClick={() => setCurrentSide(btn)}>{btn}</button>
      ))}

      {isPreview ? (
        <MockupList mockups={db.mockups} snapshot={snapshot} />
      ) : (
        <DesignCanvasList
          canvases={db.canvases}
          snapshot={snapshot}
          setSnapshot={setSnapshot}
        />
      )}
    </>
  );
};

export default App;
