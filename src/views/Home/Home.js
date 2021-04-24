import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card'
import square1 from '../../img/square1.png'
import square2 from '../../img/square2.png'
import square3 from '../../img/square3.png'
import square4 from '../../img/square4.png'
import square5 from '../../img/square5.png'
import square6 from '../../img/square6.png'
import square7 from '../../img/square7.png'
import square8 from '../../img/square8.png'
import pentagon from '../../img/pentagon.png'
import pentagon2 from '../../img/pentagon2.png'
import pentagon3 from '../../img/pentagon3.png'
import pentagon4 from '../../img/pentagon4.png'
import pentagon5 from '../../img/pentagon5.png'
import hexagon from '../../img/hexagon.png'
import hexagon2 from '../../img/hexagon2.png'
import hexagon3 from '../../img/hexagon3.png'
import hexagon4 from '../../img/hexagon4.png'
import hexagon5 from '../../img/hexagon5.png'
import triangle1 from '../../img/triangle1.jpeg'
import triangle2 from '../../img/triangle2.png'
import './Home.css';

const Home = () => {
    return (
        <div className="mycontainer">
            <div className="topic">
                Fractals Generated Using Chaos Game
            </div>
            <div className="cards">
                <div className="triangles">
                    <div className="title">Triangle</div>
                    <div className="shapes">
                        <Link to='/triangle'><Card img={triangle1} name="Sierpinski triangle" /></Link>
                        <Link to='/triangle2'><Card img={triangle2} name="Random Sierpinski triangle" /></Link>
                    </div>
                </div>
                <div className="squares">
                    <div className="title">Square</div>
                    <div className="shapes">
                        <Link to='/square'><Card img={square1} /></Link>
                        <Link to='/square2'><Card img={square2} /></Link>
                        <Link to='/square3'><Card img={square3} /></Link>
                        <Link to='/square4'><Card img={square4} /></Link>
                        <Link to='/square5'><Card img={square5} /></Link>
                        <Link to='/square6'><Card img={square6} /></Link>
                        <Link to='/square7'><Card img={square7} /></Link>
                        <Link to='/square8'><Card img={square8} /></Link>
                    </div>
                </div>
                <div className="pentagons">
                    <div className="title">Pentagon</div>
                    <div className="shapes">
                        <Link to='/pentagon'><Card img={pentagon} /></Link>
                        <Link to='/pentagon2'><Card img={pentagon2} /></Link>
                        <Link to='/pentagon3'><Card img={pentagon3} /></Link>
                        <Link to='/pentagon4'><Card img={pentagon4} /></Link>
                        <Link to='/pentagon5'><Card img={pentagon5} /></Link>
                    </div>
                </div>
                <div className="hexagons">
                    <div className="title">Hexagon</div>
                    <div className="shapes">
                        <Link to='/hexagon'><Card img={hexagon} /></Link>
                        <Link to='/hexagon2'><Card img={hexagon2} /></Link>
                        <Link to='/hexagon3'><Card img={hexagon3} /></Link>
                        <Link to='/hexagon4'><Card img={hexagon4} /></Link>
                        <Link to='/hexagon5'><Card img={hexagon5} /></Link>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
