import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/NextArrow';
import PrevArrow from '../../common/carousel/PrevArrow';
import './topBrands.css'

const topBrandsList=[
    {
        id:1,
        time:"35 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png",
    },
    {
        id:2,
        time:"30 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png",
    },
    {
        id:3,
        time:"25min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png",
    },
    {
        id:4,
        time:"45 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1c69c696c67a0791937fab960a9bdf0a_1611298398.png",
    },
    {
        id:5,
        time:"33 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png",
    },
    {
        id:6,
        time:"30 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/ddc5afe51006b94eab407815b125028c_1611268568.png",
    },
    {
        id:7,
        time:"17 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/f6f779024f5f34469381413bbbddbcbc_1617920260.png",
    },
    {
        id:8,
        time:"28 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/370c304771298718e899edd29be3d4b4_1605095053.png",
    }
]
const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };
 
const TopBrands = () => {
    return (
        <div className="top-brands max-width">
            <div className="collection-title">Top brands for you </div>
            <Slider {...settings}>
            {topBrandsList.map((brand)=>{
                return <div>
                    <div className="top-brands-cover">
                        <img src={brand.cover} className="top-brands-image" alt={brand.time}/>
                    </div>
                </div>
            })}
            </Slider>
        </div>
    )
}

export default TopBrands
