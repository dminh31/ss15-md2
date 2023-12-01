import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, increase, decrease } from '../store';
export default function Cart() {
    const data = useSelector(state => {
        // console.log(state.productReducer.products);
        return state.productReducer.cart
    })
    const dispatch = useDispatch()
    const handleDelete = (index) => {
        dispatch(deleteProduct(index))
    }
    const handleIncrease = (id) => {
        dispatch(increase(id))
    }
    const handleDecrease = (id) => {
        dispatch(decrease(id))
    }
    return (
        <>
            <div className='bg-black w-[100%] h-[100px] flex items-center sticky top-0 '>
                <div className='w-[100%] flex justify-around  text-xl m-auto'>
                    <Link to={"/"}> <h2 className='text-white'>List Product</h2></Link>
                    <input type="text" className='w-[30%] p-1 text-xl' />
                    <Link to={"/cart"}><AiOutlineShoppingCart style={{ width: "30px", height: "30px", color: "white" }} />
                        <p style={{ color: "white" }}></p>
                    </Link>
                </div>
            </div>

            <div className=' text-black'>
                <table border={1} cellPadding={10} cellSpacing={10} className='text-center w-[100%]' >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên</th>
                            <th>Ảnh</th>
                            <th>Quantity</th>
                            <th>Giá</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><img className='w-[60%] h-[200px] m-auto' src={item.image} alt="" /></td>
                                <td>{item.price}</td>
                                <td>
                                    <button className='bg-slate-400 px-3' onClick={() => handleIncrease(item.id)}>-</button>
                                    {item.quantity}
                                    <button className='bg-amber-600 px-3' onClick={() => handleDecrease(item.id)}>+</button>
                                </td>
                                <td>
                                    <button className='bg-slate-400 mr-5 p-3' onClick={() => handleDelete(index)}>Delete</button>
                                    <button className='bg-red-500 p-3'>Edit</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
