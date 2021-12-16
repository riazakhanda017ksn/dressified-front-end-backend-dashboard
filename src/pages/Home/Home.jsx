import React from 'react'
import Chart from '../../component/Chart/Chart'
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo'
import './Home.css'
import { userData } from '../../dummyData'
import WidgetSm from '../../component/WidgetSm/WidgetSm'
import WidgetLg from '../../component/WidgetLg/WidgetLg'

export default function Home() {

    return (
        <div className='home'>
           <FeaturedInfo/>
           <Chart data={userData} title='User Analytics' grid  dataKey='Active User' />
            <div className="homeWidget">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
