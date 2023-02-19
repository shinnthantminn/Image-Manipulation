import React from "react";
import MyEditor from "./MyEditor";

const DesignCanvasList = ({ canvases, snapshot, setSnapshot }) => {
  return (
    <ul>
      {canvases
        // .filter((c) => c.side === currentSide)
        .map((c) => (
          <MyEditor
            {...c}
            snapshot={snapshot[`${c.mockupId}-${c.side}`]}
            takeSnapshot={(json) => {
              setSnapshot((prevState) => ({
                ...prevState,
                [`${c.mockupId}-${c.side}`]: json
              }));
            }}
          />
        ))}
    </ul>
  );
};

export default DesignCanvasList;
