import Sketch from 'react-p5';

let points = [];
let next;
let current;
let a;
let b;
let c;
let d;
let e;
let f;
let g;
let h;
let side;
const Square7 = ({ color }) => {
    const setup = (p5, canvasParentRef) => {
        side = Math.min(p5.windowWidth, p5.windowHeight)
        p5.createCanvas(side,side).parent(canvasParentRef);    
        a = p5.createVector(0, 0);
        b = p5.createVector(0, p5.height);
        c = p5.createVector(p5.width, p5.height);
        d = p5.createVector(p5.width, 0);
        e = p5.createVector(0, p5.height / 2);
        f = p5.createVector(p5.width / 2, p5.height);
        g = p5.createVector(p5.width, p5.height / 2);
        h = p5.createVector(p5.width / 2, 0);
        points.push(a);
        points.push(b);
        points.push(c);
        points.push(d);
        points.push(e);
        points.push(f);
        points.push(g);
        points.push(h);
        current = p5.createVector(p5.random(p5.width), p5.random(p5.height));
        p5.strokeWeight(2);
        p5.background(0);
    }
    const draw = (p5) => {
        for (let i = 0; i < 1000; i++) {
            // stroke(random(255),random(255),random(255));
            next = p5.random(points);
            if (next === a) p5.stroke(202, 0, 202);
            if (next === b) p5.stroke(0, 151, 0);
            if (next === c) p5.stroke(177, 0, 0);
            if (next === d) p5.stroke(0, 0, 178);
            if (next === e) p5.stroke(207, 102, 0);
            if (next === f) p5.stroke(0, 182, 182);
            if (next === g) p5.stroke(114, 0, 114);
            if (next === h) p5.stroke(184, 184, 38);
            current.x = p5.lerp(current.x, next.x, 2 / 3);
            current.y = p5.lerp(current.y, next.y, 2 / 3);
            p5.point(current.x, current.y);
        }
    } 
    return (
        <div className='mysketch'>
            <Sketch setup={setup} draw={draw} />
        </div>
    );
}
export default Square7

