import React from 'react'
import Slider from "react-slick";
import banner_1 from '../../images/banners/banner_1.jpg'
import banner_2 from '../../images/banners/banner_2.jpg'
import banner_3 from '../../images/banners/banner_3.jpg'
import banner_4 from '../../images/banners/banner_4.jpg'
import banner_5 from '../../images/banners/banner_5.jpg'
import banner_6 from '../../images/banners/banner_6.jpg'
import banner_7 from '../../images/banners/banner_7.jpg'
import banner_8 from '../../images/banners/banner_8.jpg'
import banner_9 from '../../images/banners/banner_9.jpg'
import banner_10 from '../../images/banners/banner_10.jpg'
import banner_11 from '../../images/banners/banner_11.jpg'
import banner_12 from '../../images/banners/banner_12.jpg'
import banner_13 from '../../images/banners/banner_13.jpg'
import banner_14 from '../../images/banners/banner_14.jpg'
import banner_15 from '../../images/banners/banner_15.jpg'

const Banner = () => {

    const settings = {
        arrows: false,
        autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      fade: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              dots: false,
            }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          }
        }
      ]
      };

    return (
        <div style={{background: '#000'}}>
            {/* <div className="style-overlay"></div> */}
            <Slider {...settings}>
                <div>
                    <img src={banner_1} alt="header-img" className="clinic-img" />
                </div>
                <div>
                    <img src={banner_2} alt="header-img" className="clinic-img" />
                </div>
                <div>
                    <img src={banner_3} alt="header-img" className="clinic-img" />
                </div>
                <div>
                    <img src={banner_4} alt="header-img" className="clinic-img" />
                </div>
                <div>
                    <img src={banner_5} alt="header-img" className="clinic-img" />
                </div>
                <div>
                    <img src={banner_6} alt="header-img" className="clinic-img" />
                </div>
                <div>
                    <img src={banner_7} alt="header-img" className="clinic-img" />
                </div>
                <div>
                    <img src={banner_8} alt="header-img" className="clinic-img" />
                </div>
                <div>
                    <img src={banner_9} alt="header-img" className="clinic-img" />
                </div>
                <div>
                    <img src={banner_10} alt="header-img" className="clinic-img" />
                </div>
                <div>
                    <img src={banner_11} alt="header-img" className="clinic-img" />
                </div>
                <div>
                    <img src={banner_12} alt="header-img" className="clinic-img" />
                </div>
                <div>
                    <img src={banner_13} alt="header-img" className="clinic-img" />
                </div>
                <div>
                    <img src={banner_14} alt="header-img" className="clinic-img" />
                </div>
                <div>
                    <img src={banner_15} alt="header-img" className="clinic-img" />
                </div>
            </Slider>
            
        </div>
    )
}

export default Banner
