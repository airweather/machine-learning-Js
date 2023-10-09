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

    this.path = [];
    this.isDrawing = false;

    this.#addEventListener();
  }

    #addEventListener(){
      this.canvas.onmousedown = (e) => {
        const rect = this.canvas.getBoundingClientRect();
        const mouse = [
          Math.round(e.clientX-rect.left),
          Math.round(e.clientY-rect.top),
        ];
        this.path = [mouse];
        this.isDrawing = true;
      };

      this.canvas.onmousemove = (e) => {
        if(this.isDrawing) {
          const rect = this.canvas.getBoundingClientRect();
          const mouse = [
            Math.round(e.clientX-rect.left),
            Math.round(e.clientY-rect.top),
          ];
          this.path.push(mouse);
          console.log(this.path.length)
        }
      };

      this.canvas.onmouseup = () => {
        this.isDrawing = false;
      }
    }
  }