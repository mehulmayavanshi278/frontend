import React, { useContext, useEffect, useState } from "react";
import { menu1 ,menu2} from "./Menu";
import Firstline from "./Firstline";
import Secondline from "./Secondline";
import Thirdline from "./Thirdline";
import { cartContext } from "../App";

function Fooditems(props) {

  const hidecartmenu=()=>{
    document.querySelector('.cart').style.left="-35vh";
    document.querySelector(".menubar").style.left="-40vh"
    document.querySelector(".homeCart").style.left="-40vh"

  }

  const {searchedd , setSearchedd} = useContext(cartContext);
     const [menulist1,setMenulist1]=useState(menu1);
     const [menulist2,setMenulist2]=useState(menu2);
     const [mainlist,setMainlist]=useState([...menu1,...menu2]);
     const [x,setX]=useState(1);

const heart=(id)=>{
  props.heart(id);
}

useEffect(()=>{

},[searchedd]);
    return (
    <>
      <div className="foodBody"onClick={hidecartmenu}>
        <div className="firstLine">
          <p>What Would Eat Today ?</p>
         
          <div className="items">
       { !searchedd ? menulist1.map((elm,id)=>{
        return(
          <>

      <Firstline data={elm} heart={heart}/>

          </>
        )
       })  : <Firstline data={searchedd} heart={heart}/>}
             </div>


          <div className="items">
            <p>Top meals This week</p>
            {menulist2.map((elm,id)=>{
              return(
                <>
             <Secondline data={elm} heart={heart}/>
                </>
              )
            })}
         
      
          </div>
        </div>
        <div className="sideBar">
        <div className="secondLine">
          <div className="items">
            <div className="itemheading">
              <p>Your Favourate restraunts</p>
              <div className="changeIcon">
                <i className="fa-solid fa-angle-left"></i>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div> 
          </div>
  
        </div>
        </div>
        <div className="forScroll">
        <div className="twoItems">

       {  mainlist.map((elm,id)=>{
          return(
            <>
          <Thirdline data={elm} heart={heart}/>
            </>
          )
        }) 
       }
        

        </div>
        </div>
      </div>
    </>
  );
}

export default Fooditems;
