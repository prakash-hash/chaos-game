import Sketch from 'react-p5';

let n = 3;
let points;
let next;
let current;
let r,g,b;
let side;
const Triangle2 = () => {
const setup = (p5, canvasParentRef) =>{
    side = Math.min(p5.windowWidth, p5.windowHeight)
    p5.createCanvas(side,side).parent(canvasParentRef);
    reset(p5);
    p5.strokeWeight(3);
}

const reset = (p5) =>{
    points = [];
    for(let i = 0; i < n; i++){
        points.push(p5.createVector(p5.floor(p5.random(p5.width)),p5.floor(p5.random(p5.height))));
      }
      current = p5.createVector(p5.floor(p5.random(p5.width)),p5.floor(p5.random(p5.height)));
      p5.background(0);
      p5.stroke(255);
      p5.strokeWeight(1);
      for(let p of points){
          p5.point(p.x,p.y);
      }
      r = p5.random(255);
      g = p5.random(255);
      b = p5.random(255);
}

const draw = (p5) =>{
   
    if(p5.frameCount % 100 === 0){
        reset(p5);
    }
    
    p5.stroke( r, g, b);
    
    for(let i = 0; i < 100; i++){
        next = p5.random(points);
        current.x = p5.lerp(current.x, next.x,0.5);
        current.y = p5.lerp(current.y, next.y,0.5);
        p5.point(current.x,current.y);
    }
    
    }
    return(
        <div className="mysketch">
            <Sketch setup={setup} draw={draw} />
        </div>
    );
}

export default Triangle2
