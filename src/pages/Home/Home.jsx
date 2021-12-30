import React, { useMemo } from 'react'
import Chart from '../../component/Chart/Chart'
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo'
import './Home.css'
import { userData } from '../../dummyData'
import WidgetSm from '../../component/WidgetSm/WidgetSm'
import WidgetLg from '../../component/WidgetLg/WidgetLg'
import {useState,useEffect} from 'react'
import { userRequest } from '../../requestMethod'

export default function Home() {
 const [userStats,setUserState] = useState([])
 const MONTHS = useMemo(()=>[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
 ],
 []
 )
 useEffect(()=>{
  const getStats =async()=>{
      try {
          const res = await userRequest.get('/users/stats')
          res.data.map((item)=>setUserState((prev)=>[
              ...prev,
              {name:MONTHS[item._id - 1], "Active User":item.total}
          ]))
      } catch (error) {
          console.log(error);
      }
  } 
  getStats()
 },[MONTHS])
 console.log('userStats',userStats);
    return (
        <div className='home'>
           <FeaturedInfo/>
           <Chart data={userStats} title='User Analytics' grid  dataKey='Active User' />
            <div className="homeWidget">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
