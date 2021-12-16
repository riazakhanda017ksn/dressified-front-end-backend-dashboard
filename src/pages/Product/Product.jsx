import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Chart from '../../component/Chart/Chart'
import './product.css'
import {productData} from '../../dummyData'
import { Publish } from '@material-ui/icons'
export default function Product() {
    console.log('productData',productData);
    return (
        <div className='product'>
           <div className="productTitleContainer">
               <h3 className="ProductTitle">Product</h3>
               <Link to='/newProduct'>
               <button className="productAddButton">Create</button>
               </Link>
               
           </div>
           <div className="product-top">
               <div className="productTopLeft">
                   <Chart data={productData} dataKey="Sales" title='Sales Performance'/>
               </div>
               <div className="productTopRight">
                   <div className="productInfoTop"> 
                   <div className="productInfoBottom">
                       <img src="https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" className="productImg" />
                       <span className="productName">Apple Airpods</span>
                   </div>
                   {/* /// */}
                   <div className="productInfoBottomItem">
                   <div className="product-bottom">
                    <div className="productInfoItem">
                   <div className="productInfoKey">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">123</span>
                   </div>
               </div>
               <div className="productInfoItem">
                   <div className="productInfoKey">
                      <span className="productInfoKey">Sales:</span>
                      <span className="productInfoValue">5123</span>
                   </div>
               </div>
               <div className="productInfoItem">
                   <div className="productInfoKey">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">yes</span>
                   </div>
               </div>
               <div className="productInfoItem">
                   <div className="productInfoKey">
                      <span className="productInfoKey">in stock :</span>
                      <span className="productInfoValue">no</span>
                   </div>
               </div>
               </div>
           </div>
               </div>
                  
               </div>
           </div>
         <div className="productBottomMoreItem">
         <form className="productForm">
            <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" name="" id="" />
                <label>In Stock</label>
                <select name='inStock' id='inStock'>
                 <option value="yes">Yes</option>
                 <option value="no">No</option>
                </select>
                <label>Active</label>
                <select name='active' id='active'>
                 <option value="yes">Yes</option>
                 <option value="no">No</option>
                </select>
            </div>
            <div className="productFormRight">
             <div className="productUpload">
                 <img src="https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWlycG9kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60   " alt="" className="productUploadImg" />
                 <label htmlFor='file'>
                     <Publish/>
                 </label>
                 <input type="file" id='file' style={{display:"none"}}/>
             </div>
             <button className="productUploadButton">
                 Update
             </button>
            </div>
         </form>
         </div>
        </div>
    )
}
