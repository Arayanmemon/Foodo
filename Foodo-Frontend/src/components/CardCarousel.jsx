import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
        superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5
        },
        desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3
        },
        tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2
        },
        mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
        }
};

export default function CardCarousel(props) {
        return(
                        <div className='w-4/5 mx-auto -z-50'>
                                <Carousel renderArrowsWhenDisabled={true}  arrows={true} responsive={responsive} className='py-10  z-10 bg-black' >
                                        {props.children}
                                </Carousel>
                        </div>
        
        )
}