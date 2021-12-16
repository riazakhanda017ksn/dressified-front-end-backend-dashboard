import React from 'react'
import './newUser.css'

export default function NewUser() {
    return (
        <div className='newUser'>
            <h2 className="newUserTitle">
                New User
            </h2>
            <form  >
                <div className="newUserForm">
             <div className="newUserItem">
                 <label >Username</label>
                 <input type="email" name="" placeholder='john' />
             </div>
             <div className="newUserItem">
                 <label >Full Name</label>
                 <input type="email" name="" placeholder='johny anna' />
             </div>
             <div className="newUserItem">
                 <label >Email</label>
                 <input type="email" name="" placeholder='john@gmail.com' />
             </div>
             <div className="newUserItem">
                 <label >Password</label>
                 <input type="password" name="" placeholder='john@gmail.com' />
             </div>
             <div className="newUserItem">
                 <label >Phone</label>
                 <input type="number" name="" placeholder='+ 199 839 891' />
             </div>
             <div className="newUserItem">
                 <label >Address</label>
                 <input type="number" name="" placeholder='NY' />
             </div>
             <div className="newUserItem">
                 <label >Address</label>
                 <input type="number" name="" placeholder='NY' />
             </div>
             <div className="newUserItem">
                 <label >Gender</label>
                 <div className="newUserGender">
                 <input type="radio" name="gender" id='male' value='male' />
                 <label htmlFor="male">Male</label>
                 <input type="radio" name="gender" id='female' value='female' />
                 <label htmlFor="male">Female</label>
                 <input type="radio" name="gender" id='other' value='other' />
                 <label htmlFor="other">Other</label>
                 </div>
             </div>
             <div className="newUserItem">
                 <label > Active</label>
                 <select className='newUserSelect' name="active" id="active">
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
                 </select>
             </div> 
             </div>
             <button className="userCreate">
                 Create
             </button>
            </form>
        </div>
    )
}
