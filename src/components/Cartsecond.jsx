import React, { useContext } from 'react'
import { cartContext } from '../App'

function Cartsecond(props) {
    const {state , dispatch} = useContext(cartContext);
    const setno1  = (id)=>{

        dispatch({type:"user",payload:state-1})
       props.setno(id);
    }
    const setno2  = (id)=>{

        dispatch({type:"user",payload:state+1})
       props.setno2(id);
    }
  return (
    <>
         <div className='cartItem'>
                <div className='icon1'>
                    <img src={props.data.imgsrc}/>
                </div>
                <div className='itemDetails1'>
                    <div className='itemName'>
                        <p>{props.data.name}</p>
                        <div className='cartBtn'>
                        <i className="fa-solid fa-minus"onClick={()=>{setno1(props.data.id)}}></i>
                        <p>{props.data.no}</p>
                        <i className="fa-solid fa-plus"onClick={()=>{setno2(props.data.id)}}></i>
                        </div>
                    </div>
                    <div className='itemPrice'>
                        <p>{props.data.price*props.data.no} ₹</p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Cartsecond
