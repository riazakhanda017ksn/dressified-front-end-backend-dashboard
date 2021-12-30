import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import './featuredInfo.css' 
import {useState,useEffect} from 'react'
import { userRequest } from '../../requestMethod'
export default function FeaturedInfo() {
    const [income,setIncome] = useState([])
    const [perc, setPerc]=useState(0)
    useEffect(()=>{
    const getIncome = async () =>{
        try {
            const res = await userRequest.get('orders/income')
            setIncome(res.data);
            setPerc((res.data[1].total * 100) / res.data[0].total-100)
        } catch (error) {
            console.log(error);
        }
    }
    getIncome()
    },[])

    console.log('income', perc);
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featureMoneyContainer">
                    <span className="featuredMoney">${income[1]?.total}</span>
                    <span className="featuredMoneyRate">
                       %{Math.floor(perc)}
                       {
                           perc < 0 ? <ArrowDownward  className='featuredIcon negative' /> :
                           <ArrowUpward className='featuredIcon '/>
                       }
                        
                    </span>
                </div>
                <span className="featuredSub">
                    Compare to last month
                </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featureMoneyContainer">
                    <span className="featuredMoney">$2,412</span>
                    <span className="featuredMoneyRate">
                        -11.4
                        <ArrowDownward  className='featuredIcon negative'  />
                    </span>
                </div>
                <span className="featuredSub">
                    Compare to last month
                </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featureMoneyContainer">
                    <span className="featuredMoney">$2,562</span>
                    <span className="featuredMoneyRate">
                        +2
                        <ArrowUpward className='featuredIcon '/>
                    </span>
                </div>
                <span className="featuredSub">
                    Compare to last month
                </span>
            </div>
        </div>
    )
}
