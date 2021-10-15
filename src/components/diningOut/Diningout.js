import React from 'react'
import Collection from '../common/collection/Collection'
import"./diningout.css"
const collectionList=[
    {
    id:1,
    title:"Trending This Week",
    cover :"https://b.zmtcdn.com/data/collections/9662e85f2ba360c0da1d95153169ffbc_1625736567.png",
    places:"12 places",
    },
    {
        id:2,
        title:"Live Sports Screening",
        cover :"https://b.zmtcdn.com/data/collections/7e296d5b75ca7b0f88e451b49e41ba99_1618208591.jpg",
        places:"10 places",
        },
        {
            id:3,
            title:"Newly Opened",
            cover :"https://b.zmtcdn.com/data/collections/90999c2395ba9c9c40998607c8dd5af1_1581058174.jpg",
            places:"15 places",
            },
            {
                id:4,
                title:"Veggie Friendly",
                cover :"https://b.zmtcdn.com/data/collections/e15d090b71c5f3d7b135c88798604070_1618898707.jpg",
                places:"23 places",
             },
                {
                    id:5,
                    title:"Best of Coimbatore",
                    cover :"https://b.zmtcdn.com/data/collections/33ebdc279ce63a293c52095b1facf611_1539323119.jpg",
                    places:"18 places",
                   },
                    {
                        id:6,
                        title:"Great Buffets",
                        cover :"https://b.zmtcdn.com/data/collections/1c0daad79bed143d6a59f67efb6fe196_1535355063.jpg",
                        places:"10 places",
                        },
                        {
                            id:7,
                            title:"Kebab Places",
                            cover :"https://b.zmtcdn.com/data/collections/738be706f86548e91081290544449919_1427112719_l.jpg",
                            places:"25 places",
                            }
]

const Diningout = () => {
    return (
        <div>
            <Collection list={collectionList}/>
        </div>
    )
}

export default Diningout
