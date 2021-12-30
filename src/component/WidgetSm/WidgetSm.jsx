import React from 'react'
import './WidgetSm.css'
import {Visibility} from '@material-ui/icons'
import {useState,useEffect} from 'react'
import {userRequest} from '../../requestMethod'

export default function WidgetSm() {
    const [users,setUser] = useState([])
    useEffect(()=>{
        const getUser = async () =>{
         try{
             const res = await userRequest.get('users/?new=true')
             setUser(res.data)
             console.log('res.data',res.data);
          }catch{}
        }
        getUser()
    },[])

    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {users.map(user=>(
                        <li className="widgetSmListItem" key={user._id}>
                    <img src={user.img || 'https://i.ibb.co/kSMf9C8/jive-avatar-default.png' } alt="" className="widgetImg" />
                    <div className="widgetSmUser">
                     <span className="widgetSmUsername">
                        {user.username}
                     </span>
                    
                    </div>
                    <button className="widgetSmButton">
                        <Visibility/>
                        Display
                    </button>
                </li> 
                ))
                }
               
             
            </ul>
        </div>
    )
}
