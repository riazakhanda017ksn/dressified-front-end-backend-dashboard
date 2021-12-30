import React, { useEffect } from 'react'
import './ProductList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
 import {useDispatch, useSelector} from 'react-redux'
import {  deleteProduct, getProducts } from '../../redux/apiCalls';

export default function ProductList() {

    const dispatch = useDispatch()
    useEffect(()=>{
      getProducts(dispatch)
    },[dispatch])

    const products = useSelector((state)=>state.product.products)
      console.log('products', products);

      const handleDelete = (id) => {
        deleteProduct(id, dispatch);
      };
    
    //
    const columns = [
        { field: '_id', headerName: 'ID', width: 270 },
        {
          field: 'product',
          headerName: 'Product',
          width: 230,
          editable: true,
          renderCell:(params)=>{
             return (
                  <div className='productListUser'>
                      <img src={params.row.img} alt="" />
                      {
                          params.row.title
                      }
                  </div>
             )
          } 
        },
      
      
        {
          field: 'price',
          headerName: 'Price ',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 220,
         
        },
        {
          field: 'action',
          headerName: 'Action',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 220,
          renderCell:(params)=>{
            return (
                <div className='userListEdit'>
                    <Link to={`/product/`+params.row._id}>
                    <button >Edit</button>
                    </Link>
                    
                    <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
                </div>
            )
        }
        },
      ];
    return (
        <div className='product-list'>
                      <DataGrid
        rows={products}
        columns={columns}
        pageSize={8}
        getRowId={(row)=>row._id}
        checkboxSelection
        disableSelectionOnClick 
      />
        </div>
    )
}
