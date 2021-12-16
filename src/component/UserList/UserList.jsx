import React, { useState } from 'react'
import './UserList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
;


export default function UserList() {
    const [data,setData]=useState(userRows)
    const handleDelete =(id)=>{
        setData(data.filter((item)=>item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'user',
          headerName: 'User',
          width: 200,
          editable: true,
          renderCell:(params)=>{
             return (
                  <div className='userListUser'>
                      <img src={params.row.avatar} alt="" />
                      {
                          params.row.username
                      }
                  </div>
             )
          } 
        },
        {
          field: 'email',
          headerName: 'email',
          width: 180,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'status',
          width: 150,
          editable: true,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 180,
         
        },
        {
          field: 'action',
          headerName: 'Action',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 150,
          renderCell:(params)=>{
            return (
                <div className='userListEdit'>
                    <Link to={`/user/`+params.row.id}>
                    <button >Edit</button>
                    </Link>
                    
                   <DeleteOutline  onClick={()=>handleDelete(params.row.id)}   />
                </div>
            )
        }
        },
      ];
      
    
      
      
    return (
        <div className='userList'>
             <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick 
      />
            
        </div>
    )
}
