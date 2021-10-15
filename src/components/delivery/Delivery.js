import React from 'react'
import Filters from '../filters/Filters'
import"./delivery.css"
import DeliveryCollections from './deliveryCollections/DeliveryCollections'
import TopBrands from './topBrands/TopBrands'

const deliveryFilters=[
    {
        id:1,
        icon:<i className="fas fa-sliders-h absolute-center"></i>,
        title :"Filters"
    },
    {
        id:2,
        title :"Rating: 4.0+",
    },
    {
        id:3,
        title :"Safe and Hygienic",
    },
    {
        id:4,
        title :"Pure veg",
    },
    {
        id:5,
        icon:<i className="fas fa-hourglass-half absolute-center"></i>,
        title :"Delivery Time",
    },
    {
        id:6,
        title :"Great Offers",
    }
]
const Delivery = () => {
    return (
        <div>
            <div className="max-width">
                
                <Filters filterList={deliveryFilters}/>
            </div>
            <DeliveryCollections/>
            <TopBrands/>
        </div>
    )
}

export default Delivery
