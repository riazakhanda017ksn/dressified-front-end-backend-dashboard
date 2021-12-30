/* eslint-disable default-case */
import React from 'react'
import { useState } from 'react'
import './NewProduct.css'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase';
import {useDispatch} from 'react-redux'
import {addProduct} from '../../redux/apiCalls'

export default function NewProduct() {
  const [inputs,setInputs]=useState({})
  const [file,setFiles] = useState(null)
  const[cat, setCat] = useState([])
  const dispatch=useDispatch()

  console.log(file);
  const handleChange =(e)=>{
  setInputs(prev=>{
    return{...prev,[e.target.name]:e.target.value}
  })
  }
  //
  const handleCat =(e)=>{
  setCat(e.target.value.split(","))
  }

  const handleClick =(e)=>{
    e.preventDefault()
    const fileName = new Date().getTime() + file.name
    const storage = getStorage(app)
    const storageRef = ref(storage,fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
//
uploadTask.on('state_changed', 
  (snapshot) => {

    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
    console.log(error);
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  const product =  {...inputs,img : downloadURL,categories:cat};
   addProduct(product,dispatch)

    });
  }
);
  }
 
  console.log(file);
    return (
        <div className="newProduct">
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm">
          <div className="addProductItem">
            <label>Image</label>
            <input  type="file" id="file" onChange={e=>setFiles(e.target.files[0])} />
          </div>
          <div className="addProductItem">
            <label>Title</label>
            <input name='title' type="text" onChange={handleChange} />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <input name='desc' type="text" onChange={handleChange} />
          </div>
          <div className="addProductItem">
            <label>Price</label>
            <input name='price' type="number" onChange={handleChange} />
          </div>
          <div className="addProductItem">
            <label>Categories</label>
            <input type="text" onChange={handleCat} name='categories' />
          </div>
          
          {/*  */}
          <button className="addProductButton" onClick={handleClick}>Create</button>
        </form>
      </div>
    )
}
