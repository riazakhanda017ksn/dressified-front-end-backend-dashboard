import React from 'react'
import './User.css'
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@material-ui/icons'
import { Link } from 'react-router-dom'
export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
             <h2 className="userTitle">
                 Edit User
             </h2>
             <Link to='/newUser'>
             <button className="userAddButton">Create</button>
             </Link>
             
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.unsplash.com/flagged/photo-1559502867-c406bd78ff24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="userShowImg" />
                    <div className="UserShowTopTitle">
                        <span className="showUserUsername">
                            Anna Becker
                        </span>
                        <span className="showUserUserTitle">
                            Software Engineer
                        </span>
                    </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="accountDetails">
                            Account Details
                           
                        </span>
                        <div className="userShowInfo">
                            <PermIdentity/>
                         <span className="userShowInfoTitle">
                             annabeck99
                         </span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday/>
                         <span className="userShowInfoTitle">
                             10.12.2017
                         </span>
                        </div><span className="accountDetails">
                           Contact Details
                           
                        </span> 
                        <div className="userShowInfo">
                        
                        <PhoneAndroid/>
                         <span className="userShowInfoTitle">
                             + 19 08 484848
                         </span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline/>
                         <span className="userShowInfoTitle">
                             annabeck@gmail.com
                         </span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching/>
                         <span className="userShowInfoTitle">
                           BD | Mirpur-14
                         </span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>

                    <form  className="userUpdateForm">
                        <div className="userLeftItem">
                        <div className="userUpdateLeft">
                            <label>Username</label>
                            <input type="text" className="userUpdateInput" placeholder='annabeck65' />
                        </div>
                        <div className="userUpdateLeft">
                            <label>Full Name</label>
                            <input type="text" className="userUpdateInput" placeholder='Anna Becker' />
                        </div>
                        <div className="userUpdateLeft">
                            <label>Email</label>
                            <input type="email" className="userUpdateInput" placeholder='annabeck@gmail.com' />
                        </div>
                        <div className="userUpdateLeft">
                            <label>Phone</label>
                            <input type="text" className="userUpdateInput" placeholder='+ 19 08 484848' />
                        </div>
                        <div className="userUpdateLeft">
                            <label>Address</label>
                            <input type="text" className="userUpdateInput" placeholder='NY' />
                        </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.unsplash.com/flagged/photo-1559502867-c406bd78ff24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                <label htmlFor='file'><Publish/></label>
                                <input type="file" id='file' style={{display:"none"}} /> 
                            </div>
                            <button className="userUpdateButton">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
