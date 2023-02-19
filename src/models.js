export class Mockup {
  constructor(imgUrl, side, id) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.side = side;
  }
}

export class DesignCanvas {
  constructor(imgUrl, side, mockupId) {
    this.imgUrl = imgUrl;
    this.side = side;
    this.mockupId = mockupId;
  }
}
