import './tripcard.styles.scss';
import {ReactComponent as Trip} from '../assets/Trip.svg'


const TripCard = () =>{
    return(
        <div className="TripCard">
            <Trip className='TripImg'/>
            <div className='TripContext'>
                <div className='TripText'>
                    <h2>Enceladus</h2>
                    <p>is the sixth-largest moon of Saturn. It is about a tenth of Saturn's largest moon, Titan.</p>
                    <p>Explore this amazing cosmic marvel in a safe and fast trip with our aerospace company.</p>
                </div>
                <div className='PriceCard'>
                    <div className='PriceContext'>
                        <h2>999.990 €</h2>
                        <h5>one way ticket</h5>
                    </div>
                    <div className='Buy'>Purchase</div>
                </div>
            </div>
            
        </div>
    )
}

export default TripCard;