import React from 'react'
import { Link,useLocation} from 'react-router-dom/cjs/react-router-dom.min'
import Chart from '../../component/Chart/Chart'
import './product.css'
import {productData} from '../../dummyData'
import { Publish } from '@material-ui/icons'
import {useSelector} from 'react-redux'
export default function Product() {
    const location = useLocation()
    const productId = location.pathname.split('/')[2]
    const product = useSelector((state)=>state.product.products.find((product)=>product._id === productId))
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
                       <img src={product.img} alt="" className="productImg" />
                       <span className="productName">{product.titlw}</span>
                   </div>
                   {/* /// */}
                   <div className="productInfoBottomItem">
                   <div className="product-bottom">
                    <div className="productInfoItem">
                   <div className="productInfoKey">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product._id}</span>
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
                      <span className="productInfoKey">inStock:</span>
                      <span className="productInfoValue">Yes</span>
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
                <input type="text" name="" id="" placeholder={product.title}/>
                <label>Product Description</label>
                <input type="text" name="" id="" placeholder={product.desc}/>
                <label>Product price</label>
                <input type="text" name="" id="" placeholder={product.price}/>
                <label>In Stock</label>
                <select name='inStock' id='inStock'>
                 <option value="true">Yes</option>
                 <option value="false">No</option>
                </select>
            </div>
            <div className="productFormRight">
             <div className="productUpload">
                 <img src={product.img} alt="" className="productUploadImg" />
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
