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

    const lineBreak = document.createElement("br");
    container.appendChild(lineBreak);
    
    this.undoBtn = document.createElement("button");
    this.undoBtn.innerHTML = "UNDO";
    container.appendChild(this.undoBtn);
    
    this.ctx = this.canvas.getContext("2d");

    this.reset();

    this.#addEventListener();
  }

  reset() {
    this.paths = [];
    this.isDrawing = false;
    this.#redraw();
  }

  #addEventListener(){
    this.canvas.onmousedown = (e) => {
      const mouse = this.#getMouse(e);
      this.paths.push([mouse]);
      this.isDrawing = true;
    };

    this.canvas.onmousemove = (e) => {
      if(this.isDrawing) {
        const mouse = this.#getMouse(e);
        const lastPath = this.paths[this.paths.length -1];
        lastPath.push(mouse);
        this.#redraw();
      }
    };

    document.onmouseup = () => {
      this.isDrawing = false;
    }

    // mobile event
    this.canvas.ontouchstart = (e) => {
      const loc = e.touches[0];
      this.canvas.onmousedown(loc);
    }
    
    this.canvas.ontouchmove = (e) => {
      const loc = e.touches[0];
      this.canvas.onmousemove(loc);
    }
    document.ontouchend = (e) => {
      const loc = e.touches[0];
      this.canvas.onmouseup(loc);
    }
    this.undoBtn.onclick = () => {
      this.paths.pop();
      this.#redraw();
    }
  }

  #redraw = () => {
    this.ctx.clearRect(0, 0,
      this.canvas.width, this.canvas.height);
    draw.paths(this.ctx, this.paths);
    if(this.paths.length > 0) {
      this.undoBtn.disabled = false;
    }
    else {
      this.undoBtn.disabled = true;
    }
  }

  #getMouse = (e) => {
    const rect = this.canvas.getBoundingClientRect();
      return [
        Math.round(e.clientX-rect.left),
        Math.round(e.clientY-rect.top),
      ];
  }

}