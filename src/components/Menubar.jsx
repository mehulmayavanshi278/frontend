import axios from 'axios'
import React, { useContext } from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import { cartContext } from '../App'

function Menubar() {
const hidemenubar=()=>{
  document.querySelector(".menubar").style.left="-40vh"
}
   const history = useNavigate();
   const logoutme= async()=>{
     try{
     const res = await axios.get("/logoutt",{

     })
     if(res.status === 200){
      localStorage.clear("cart");
       history("/");
     }
     }catch(err){
      console.log(err);
     }
   }
   const {isorder , setIsorder,mydetails,setMydetails} =useContext(cartContext);
  return (
    <>
       <div className="menubar"onClick={()=>{ document.querySelector(".menubar").style.left="-40vh"}}>
       <i class="fa-solid fa-xmark hidemenuicon"onClick={hidemenubar}></i>
         <div className='heading'><h1>Food Delivery</h1></div>
         <div className='userImg'>
            <img src="./images/dp.jpg"/>
         </div>
         <div className='greet'>
           { mydetails && <p>hello {mydetails.name.split(" ")[0]}</p>}
         </div>
         <nav>
            <ul>
               <NavLink to="/Home"> <li onClick={()=>{setIsorder(false)}}>Home</li></NavLink>
                <li onClick={()=>{document.querySelector(".cart").style.left="0"}}>Orders</li>
                <li>Restraunts</li>
                <li>Finance</li>
                <li onClick={logoutme}> Logout</li>
            </ul>
         </nav>
         <div className='startBtn'>
            <button >Start New Order</button>
         </div>
       </div>
    </>
  )
}

export default Menubar
