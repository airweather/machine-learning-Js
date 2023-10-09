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

    this.ctx = this.canvas.getContext("2d");

    this.#addEventListener();
  }

    #addEventListener(){
      this.canvas.onmousedown= (evt) => {
        const rect = this.canvas.getBoundingClientRect();
        const mouse = [
          Math.round(evt.clientX-rect.left),
          Math.round(evt.clientY-rect.top),
        ];
        console.log(mouse);
      };
    }
  }