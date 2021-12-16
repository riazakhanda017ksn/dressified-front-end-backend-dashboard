import React from 'react'
import './WidgetLg.css'

export default function WidgetLg() {
    const Button =({type})=>{
        return <button className={'widgetLgButton '  + type}>{type}</button>
    }
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
                <tr className='widgetLgTr'>
                <td className="widgetLgUser">
                    <img src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                
                <td className="widgetLgDate">
                    2 Jun 2021
                </td>
                <td className="widgetLgAmount">
                    $ 122.00
                </td>
                <td className="widgetLgStatus">
                   <Button type='approved'  />
                </td>
                </tr>
                {/* // */}
                <tr className='widgetLgTr'>
                <td className="widgetLgUser">
                    <img src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                
                <td className="widgetLgDate">
                    2 Jun 2021
                </td>
                <td className="widgetLgAmount">
                    $ 122.00
                </td>
                <td className="widgetLgStatus">
                   <Button type='declined'  />
                </td>
                </tr>
                {/* // */}
                <tr className='widgetLgTr'>
                <td className="widgetLgUser">
                    <img src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                
                <td className="widgetLgDate">
                    2 Jun 2021
                </td>
                <td className="widgetLgAmount">
                    $ 122.00
                </td>
                <td className="widgetLgStatus">
                   <Button type='pending'  />
                </td>
                </tr>
                {/* // */}
                <tr className='widgetLgTr'>
                <td className="widgetLgUser">
                    <img src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                
                <td className="widgetLgDate">
                    2 Jun 2021
                </td>
                <td className="widgetLgAmount">
                    $ 122.00
                </td>
                <td className="widgetLgStatus">
                   <Button type='pending'  />
                </td>
                </tr>
            </table>
        </div>
    )
}
