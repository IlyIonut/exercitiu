import './tripcard.styles.scss';
import {ReactComponent as Trip} from '../assets/trip.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const trips = [
    {
      destination: 'ENCELADUS',
      system: 'The Saturn System',
      distance: 'Distance: 9.5',
      population: 'AUPopulation: 3920',
      title: 'Enceladus',
      description: 'Enceladus is the sixth-largest moon of Saturn. It is about a tenth of Saturn\'s largest moon, Titan.',
      price: '999.990 €',
      ticketType: 'one way ticket',
    },
    {
        destination: 'ENCELADUS',
        system: 'The Saturn System',
        distance: 'Distance: 9.5',
        population: 'AUPopulation: 3920',
        title: 'Enceladus',
        description: 'Enceladus is the sixth-largest moon of Saturn. It is about a tenth of Saturn\'s largest moon, Titan.',
        price: '999.990 €',
        ticketType: 'one way ticket',
      },

  ];
  
  const TripCard = () => {

   
    return (
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {trips.map((trip, index) => (
            <SwiperSlide key={index}>
              <div className='TripCard'>
                <div className="TripImg">
                    <Trip  />
                </div>
                <div className="Destination">
                  <h4>{trip.destination}</h4>
                  <p>{trip.system}</p>
                  <p>{trip.distance}</p>
                  <p>{trip.population}</p>
                </div>
                <div className="TripContext">
                  <div className="TripText">
                    <div className="Title">
                      <p>{trip.title}</p>
                    </div>
                    <p>{trip.description}</p>
                    <p>Explore this amazing cosmic marvel in a safe and fast trip with our aerospace company.</p>
                  </div>
                  <div className="PriceCard">
                    <div className="PriceContext">
                      <h2>{trip.price}</h2>
                      <h5>{trip.ticketType}</h5>
                    </div>
                    <button className="Buy">Purchase</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  };
  
  export default TripCard;