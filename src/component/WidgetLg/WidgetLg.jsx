import React from 'react'
import './WidgetLg.css'
import {useState,useEffect} from 'react'
import { format } from 'timeago.js'
import {userRequest} from '../../requestMethod'

export default function WidgetLg() {
    
    const Button =({type})=>{
        return <button className={'widgetLgButton '  + type}>{type}</button>
    }

    const [orders,setOrders] = useState([])
    useEffect(()=>{
        const getUser = async () =>{
         try{
             const res = await userRequest.get('orders')
             setOrders(res.data)
             console.log('riaz ahmed aks',res.data);
          }catch{}
        }

        getUser()
    },[])



    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">
                Latest Transaction
            </h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                 <th className="widgetLgTh">Customer</th>
                 <th className="widgetLgTh">Date</th>
                 <th className="widgetLgTh">Amount</th>
                 <th className="widgetLgTh">Status</th>
                </tr>
                {/* // */}
                {
                    orders.map(order=>
                         <tr className='widgetLgTr'>
                <td className="widgetLgUser">
                    <span className="widgetLgName">{order.userId}</span>
                </td>
                
                <td className="widgetLgDate">
                    {
                       format (order.createdAt)
                    }
                </td>
                <td className="widgetLgAmount">
                    $ {order.amount}
                </td>
                <td className="widgetLgStatus">
                   <Button type={order.status}  />
                </td>
                </tr> 
                    )
                }
                       
            </table>
        </div>
    )
}
