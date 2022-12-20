import React, { useContext, useState } from "react";
import Cartsecond from "./Cartsecond";
import { menu1, menu2 } from "./Menu";
import { cartContext } from "../App";

function Cart(props) {
  const hidemenu=()=>{
    document.querySelector(".menubar").style.left="-40vh"
  }
  const [mainlist, setMainlist] = useState([...menu1, ...menu2]);
  const { cartval, setCartval ,cartmain , setCartmain ,sum ,setSum , mydetails , setMydetails} = useContext(cartContext);

  
   const setno=(id)=>{
     props.setno(id);
   }
   const setno2=(id)=>{
    props.setno2(id);
   }
  return (
    <>
      <div className="cart"onClick={hidemenu}>
     
        <div className="cartFirst">
          <div className="myOrderHeading">
            <h2>My Order</h2>
            <p>Edit</p>
          </div>
          <div className="timing">
            <div className="icon"> 
            <i className="fa-solid fa-clock color-success"></i>
            </div>
            <p> {new Date().getHours()} :{new Date().getMinutes() >9 ? new Date().getMinutes() : `{0 ${new Date().getMinutes()}}` }  { new Date().getHours() >12 && new Date().getHours() <25 ? "pm" : "am"}</p>
          </div>
          <div className="address">
            <div className="icon">
            <i className="fa-solid fa-location-dot"></i>
            </div>
           { mydetails && <p>{mydetails.address}</p>}
          </div>
          <div className="warning">
            <div className="icon">
            <i className="fa-solid fa-message"></i>
            </div>
            <p>order must stay warm</p>
          </div>
        </div>

        <div className="cartSecond">
      
      { cartmain &&cartmain.map((elm)=>{
        return(
          <Cartsecond data={elm} setno={setno} setno2={setno2}/>
        )
      })}

        </div>

        <div className="cartThird">
          <p>Total</p>
         { sum && <h3>{sum}₹</h3>}
        </div>
        <div className="checkOutBtn">Checkout</div>
      </div>
    </>
  );
}

export default Cart;
