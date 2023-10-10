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
        const mouse = this.#getMouse(e);
        this.path = [mouse];
        this.isDrawing = true;
      };

      this.canvas.onmousemove = (e) => {
        if(this.isDrawing) {
          const mouse = this.#getMouse(e);
          this.path.push(mouse);
          this.#redraw();
        }
      };

      this.canvas.onmouseup = () => {
        this.isDrawing = false;
      }
    }

    #redraw = () => {
      
    }

    #getMouse = (e) => {
      const rect = this.canvas.getBoundingClientRect();
        return [
          Math.round(e.clientX-rect.left),
          Math.round(e.clientY-rect.top),
        ];
    }

  }