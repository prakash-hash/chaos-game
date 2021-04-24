import Sketch from 'react-p5';

let points;
let next;
let current;
let previous;
let previous_previous;
let p = 0.5;
let side;
const Square4 = ({ color }) => {
    const setup = (p5, canvasParentRef) => {
        side = Math.min(p5.windowWidth, p5.windowHeight)
        p5.createCanvas(side,side).parent(canvasParentRef);    
        points = [];
        let a = p5.createVector(0, 0);
        let b = p5.createVector(0, p5.height);
        let c = p5.createVector(p5.width, p5.height);
        let d = p5.createVector(p5.width, 0);
        points.push(a);
        points.push(b);
        points.push(c);
        points.push(d);
        current = p5.createVector(p5.random(p5.width), p5.random(p5.height));
        p5.strokeWeight(2);
        p5.background(0);
    }
    const draw = (p5) => {
        for (let i = 0; i < 100; i++) {
            // stroke(random(255),random(255),random(255));
            p5.stroke(color);
            next = p5.random(points);
    
            if(i === 0){
                current.x = p5.lerp(current.x, next.x,p);
                current.y = p5.lerp(current.y, next.y,p);
                previous = next;               
            }
            else if(previous !== previous_previous ||  
                (p5.abs(points.indexOf(previous)-points.indexOf(next)) !== 1 && 
                p5.abs(points.indexOf(previous)-points.indexOf(next)) !== 3)){
                current.x = p5.lerp(current.x, next.x,p);
                current.y = p5.lerp(current.y, next.y,p);
                previous_previous = previous;
                previous = next;        
        }
        p5.point(current.x,current.y);
        }
    }
    return (
        <div className='mysketch'>
            <Sketch setup={setup} draw={draw} />
        </div>
    );
}
export default Square4

