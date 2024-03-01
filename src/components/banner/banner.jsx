import React from 'react'
import '../banner/banner.css'
import logoBanner from '../banner/imgBanner/logoBanner.png'
import SliderC from '../Slider/Slider'
import Accordion from '../Accordion/Accordion'


class Banner extends React.Component {
    render() {
        return (
            <>

                <div className="banner">
                    <div className="banner-content">
                        <img src={logoBanner} alt="logo" />
                        <h2 className="banner_title">БРЕНД ОДЕЖДЫ</h2>
                        <a href="" className="banner-btn">Перейти в категории</a>
                    </div>
                </div>


                <div className="accordion_banner">
                    <h2>Аккордион</h2>
                    <Accordion title="Вопрос 1" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi cumque ipsa veniam, obcaecati rerum quae deserunt expedita beatae voluptates minima?" />
                    <Accordion title="Вопрос 2" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi cumque ipsa veniam, obcaecati rerum quae deserunt expedita beatae voluptates minima?" />
                    <Accordion title="Вопрос 3" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi cumque ipsa veniam, obcaecati rerum quae deserunt expedita beatae voluptates minima?" />
                </div>
                <hr />
          
                <SliderC />

            </>

        )
    }
}

export default Banner