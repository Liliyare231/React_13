import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../Slider/Slider.css'


import catalog1 from '../catalog/imgCatalog/S035c1162fb30422799044906f5a9d0ecG 10.png'
import catalog2 from '../catalog/imgCatalog/S035c1162fb30422799044906f5a9d0ecG 11.png'
import catalog3 from '../catalog/imgCatalog/S035c1162fb30422799044906f5a9d0ecG 12.png'

export default function SliderC() {
    const setting = {
        dots: true,
        infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="slider_block">
            <h2>Слайдер</h2>
            <div className="slider_place">
                <Slider {...setting}>
                    <div className="slider">
                        <img src={catalog1} alt="" />
                    </div>
                    <div className="slider">
                        <img src={catalog2} alt="" />
                    </div>
                    <div className="slider">
                        <img src={catalog3} alt="" />
                    </div>

                </Slider>
            </div>
        </div>
    )
}