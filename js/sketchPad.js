class SketchPad{
  constructor(container, size=400){
    this.canvas = document.createElement("canvas");
    this.canvas.width = size;
    this.canvas.height = size;
    this.canvas.style=`
      background-color: #fff;
      box-shadow: 0px 0px 10px 2px #000;
    `;
    container.appendChild(this.canvas);
  }
}