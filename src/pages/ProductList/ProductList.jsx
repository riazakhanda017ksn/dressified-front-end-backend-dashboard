import React, { useState } from 'react'
import './ProductList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { productRows } from '../../dummyData';

export default function ProductList() {
    const [data,setData]=useState(productRows)
    const handleDelete =(id)=>{
        setData(data.filter((item)=>item.id !== id))
    }
    //
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'product',
          headerName: 'Product',
          width: 200,
          editable: true,
          renderCell:(params)=>{
             return (
                  <div className='productListUser'>
                      <img src={params.row.img} alt="" />
                      {
                          params.row.name
                      }
                  </div>
             )
          } 
        },
        {
          field: 'stock',
          headerName: 'Stock',
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
          field: 'price',
          headerName: 'Price ',
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
                    <Link to={`/product/`+params.row.id}>
                    <button >Edit</button>
                    </Link>
                    
                   <DeleteOutline  onClick={()=>handleDelete(params.row.id)}   />
                </div>
            )
        }
        },
      ];
    return (
        <div className='product-list'>
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
