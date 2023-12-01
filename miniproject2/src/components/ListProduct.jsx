import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/index.js';
export default function ListProduct() {
    const data=useSelector(state=>{
        // console.log(state.productReducer.products);
        return state.productReducer.products 
    })
    const dispatch=useDispatch()
    const handleAdd=(item)=>{
        dispatch(addToCart(item))
    }

    let data1= useSelector(state=>{
        return state.productReducer.cart
    })
    
    return (
        <>
            <div className='bg-black w-[100%] h-[100px] flex items-center sticky top-0 '>
                <div className='w-[100%] flex justify-around  text-xl m-auto'>
                    <Link to={"/"}> <h2 className='text-white'>List Product</h2></Link>
                    <input type="text" className='w-[30%] p-1 text-xl' />
                    <Link to={"/cart"}><AiOutlineShoppingCart style={{ width: "30px", height: "30px", color: "white" }} />
                        <p style={{ color: "white" }}>{data1.length}</p>
                    </Link>
                </div>
            </div>

            <div>
                <div className=''>
                    {data.map((item)=>{
                        return <div className='flex m-[40px]'>
                            <img className='w-[10%] h-[100px]' src={item.image} alt="" />
                            <div>
                                <h2 className='text-3xl'> {item.name}</h2>
                                <p className='w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!</p>
                            </div>
                            <div>
                                <input className='border-solid border-2' type="number" />
                                <button className='bg-orange-600 px-5 py-3 text-white' onClick={() => handleAdd(item)}>{item.price}</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </>
    )
}
