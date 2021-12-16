import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import './featuredInfo.css'
export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featureMoneyContainer">
                    <span className="featuredMoney">$2,412</span>
                    <span className="featuredMoneyRate">
                        -11.4
                        <ArrowDownward  className='featuredIcon negative' />
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
