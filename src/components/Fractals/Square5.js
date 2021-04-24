import Sketch from 'react-p5';

let points;
let next;
let current;
let previous;
let side;
const Square5 = ({color="rgb(255,255,255)"}) => {
    const setup = (p5,canvasParentRef) => {
        side = Math.min(p5.windowWidth, p5.windowHeight)
        p5.createCanvas(side,side).parent(canvasParentRef);    
        points = [];
        let a = p5.createVector(0, 0);
        let b = p5.createVector(0, p5.height);
        let c = p5.createVector(p5.width, p5.height);
        let d = p5.createVector(p5.width, 0);
        let m = p5.createVector(p5.width/2, p5.height/2);
        points.push(a);
        points.push(b);
        points.push(c);
        points.push(d);
        points.push(m);

        current = p5.createVector(p5.random(p5.width), p5.random(p5.height));
        p5.background(0);
    }
    
    
    const draw = (p5) => {
    
        for (let i = 0; i < 1000; i++) {
            p5.stroke(color);
            next = p5.random(points);
            if (previous !== next) {
                current.x = p5.lerp(current.x, next.x, 0.5);
                current.y = p5.lerp(current.y, next.y, 0.5);
                p5.point(current.x, current.y);
                previous = next;
            }
        }
    
    }
    return (
        <div className="mysketch">
            <Sketch setup={setup} draw={draw} />
        </div>
    )
}



export default Square5



