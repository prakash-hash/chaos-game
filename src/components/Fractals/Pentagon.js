import Sketch from 'react-p5';
import {Vector} from "p5";
let points;
let next;
let current;
let previous;
let side;
const pentagon = ({ color,n }) => {
    const setup = (p5, canvasParentRef) => {
        side = Math.min(p5.windowWidth, p5.windowHeight)
        p5.createCanvas(side,side).parent(canvasParentRef);    
        points = [];
        
        for (let i = 0; i < n; i++) {
            let v = Vector.fromAngle((i * p5.TWO_PI) / n);
            v.mult(p5.width / 2);
            v.add(p5.width / 2, p5.height / 2);
            points.push(v);
        }
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
        <div className='mysketch'>
            <Sketch setup={setup} draw={draw} />
        </div>
    );
}
export default pentagon



