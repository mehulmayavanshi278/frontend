import React, { useContext, useState } from 'react'
import { cartContext } from '../App';

function Navbar(props) {

  const showmenubar=()=>{
    document.querySelector('.menubar').style.left="0";
  }
  const showcart=()=>{
    document.querySelector('.cart').style.left="0"
  }
 const searchme=(val)=>{
    props.searched(val);
 }
  const InputEvent=(e)=>{
    const {value} = e.target;
    setSearchval(value);
    console.log(searchval);
  }
 
  const {isshown , setIsshown , searchval ,setSearchval , mydetails,setMydetails}=useContext(cartContext);
  const showUser=()=>{
  if(!isshown){
    const a=  document.getElementById('smInfo').children[2].style.transform="rotate(180deg)";
    setIsshown(true);
    document.querySelector('.showUser').style.display="block";
  }else if(isshown){
    const a=  document.getElementById('smInfo').children[2].style.transform="rotate(0deg)";
   setIsshown(false);
   document.querySelector('.showUser').style.display="none";
  }
  
  }
  return (
    <>
      <nav>
        <div className='leftDiv'>
        <i className="fa-solid fa-bars menubtn"style={{padding:" 1.5vh 1vh"}}onClick={showmenubar}></i>
            <div className='icon'>
            <i class="fa-solid fa-magnifying-glass"onClick={()=>{searchme(searchval)}}></i>
            </div>
            <input type="text"placeholder='Search'name="searchval"onChange={InputEvent}value={searchval}/>
        </div>
        <i className="fa-solid fa-cart-shopping cartmenubtn"onClick={showcart}></i>
        <div className='rightDiv'>
         
            <li><i class="fa-solid fa-question"></i></li>
            <li><i class="fa-solid fa-gear"></i></li>
            <li><i class="fa-solid fa-bell"></i></li>
            <div className='smallInfo'id="smInfo"onClick={showUser}>
            <div className='smallImg'>
                <img src="./images/dp.jpg"/>
            </div>
           {mydetails &&  <p>{mydetails.name.split(" ")[0]}</p>}
            <i class="fa-solid fa-chevron-down"></i>
            </div>
           
        </div>
      </nav>
    </>
  )
}

export default Navbar
