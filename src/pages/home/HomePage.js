import React, { useState } from 'react'
import Header from '../../components/common/header/Header';
import Taboptions from '../../components/common/tabOptions/Taboptions';
import Delivery from '../../components/delivery/Delivery';
import Diningout from '../../components/diningOut/Diningout';


const HomePage = () => {
    const  [activeTab, setActiveTab] = useState("Delivery");
    return (
        <div>
            <Header/>
            <Taboptions activeTab={activeTab} setActiveTab={setActiveTab}/>
            {getCorrectScreen(activeTab)}
        </div>
    )
}
const getCorrectScreen = (tab)=>{
    switch(tab){
        case"Delivery":
        return <Delivery/>;
        case"Diningout":
        return <Diningout/>;
        default:
            return <Delivery/>;
    }
}

export default HomePage
