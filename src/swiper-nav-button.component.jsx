import { useSwiper } from "swiper/react";


const SwiperNavButton = () => {
    const swiper = useSwiper();
    return(
        <div className="swiper-nav-btns">
            
            <button onClick={() => swiper.slidePrev}>&lt;</button>
            <button onClick={() => swiper.slideNext}>&gt;</button>
                
        </div>
    )
}

export default SwiperNavButton;