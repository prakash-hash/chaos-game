import Sketch from 'react-p5';
// import './Square.css';

let points = []
let next;
let current;
let side;
const Triangle = ({
    color
}) => {
    const setup = (p5, canvasParentRef) => {
        points = [];
        side = Math.min(p5.windowWidth, p5.windowHeight);
        p5.createCanvas(side, side).parent(canvasParentRef);
        let a = p5.createVector(p5.width / 2, 0);
        let b = p5.createVector(0, p5.height);
        let c = p5.createVector(p5.width, p5.height);
        points.push(a);
        points.push(b);
        points.push(c);
        current = p5.createVector(p5.random(p5.width), p5.random(p5.height));
        p5.strokeWeight(2);
        p5.background(0);
    }


    const draw = (p5) => {

        for (let i = 0; i < 100; i++) {
            p5.stroke(color);
            next = p5.random(points);
            current.x = p5.lerp(current.x, next.x, 0.5);
            current.y = p5.lerp(current.y, next.y, 0.5);
            p5.point(current.x, current.y);
        }

    }
    return ( 
    <div className = "mysketch" >
        <Sketch setup = {setup} draw = {draw}/> 
        </div>
    );
}

export default Triangle