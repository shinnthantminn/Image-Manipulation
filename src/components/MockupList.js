import React from "react";
import MockupItem from "./MockupItem";

const MockupList = ({ mockups, snapshot }) => {
  return (
    <ul>
      {mockups.map((m) => (
        <MockupItem {...m} snapshot={snapshot[`${m.id}-${m.side}`]} />
      ))}
    </ul>
  );
};

export default MockupList;
