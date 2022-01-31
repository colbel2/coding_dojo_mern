import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const EditProductForm = () => {

    const { id } = useParams();

    let [productInfo, setProductInfo] = useState({})

    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=>{
            console.log("response is this-->", res)
            setProductInfo(res.data.results)

        })
        .catch(err=> console.log(err))
    },[])

    const history = useHistory();

    const changeHandler = (e)=>{
        console.log("changed in form detected!!")
        if(e.target.type === "checkbox"){ 
            setProductInfo({
                ...productInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setProductInfo({
                ...productInfo,
                [e.target.name]: e.target.value
            })

        }
    }
    


    const updateProductSubmitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, productInfo)
            .then(res=>{
                console.log("res after put request-->", res)
                history.push("/")
            })
            .catch(err=>console.log(err))

    }

    return (
        <div>
            <h4>Edit Products Below</h4>
            <form onSubmit = {updateProductSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        className="form-control" 
                        value={productInfo.title} 
                        onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input 
                        type="text" 
                        name="price"
                        className="form-control" 
                        value={productInfo.price} 
                        onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input type="text" 
                        name="description"
                        className="form-control" 
                        value={productInfo.description} 
                        onChange={changeHandler} />
                </div>
                
                <input type="submit" value="Update Product" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default EditProductForm;