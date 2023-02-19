import { DesignCanvas, Mockup } from "./models";

const m1 = new Mockup("/front.jpeg", "front", 1);
const m2 = new Mockup("/back.jpeg", "back", 2);

const canvases = [
  new DesignCanvas("/front.jpeg", "front", m1.id),
  new DesignCanvas("/back.jpeg", "back", m2.id)
];

const mockups = [m1, m2];

const db = {
  mockups,
  canvases
};

export default db;
