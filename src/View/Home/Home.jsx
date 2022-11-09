import "./styles.scss";
import main from '../../images/MAIN.png'
import Man from '../../images/BarberHome.png'
import {Link} from 'react-router-dom'

function Home(){
   return(
    <div className='Home' style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + main})` 
      }}>
        <div className="general">
        <div className="container-home">
             <h2>you need to look good and feel good</h2>
             <p>JS Dominican Online</p>  
             <li><Link to="/Quote" className=" quote-home">Quote</Link></li>    
        </div>

        <div className="container-home2">
             <img src={Man} alt="" />
        </div>
      

       </div>
       
    </div>
 )      
}

export default Home