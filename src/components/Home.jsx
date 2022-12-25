import React, { useContext, useEffect, useState } from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import Fooditems from "./Fooditems";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { cartContext } from "../App";
import { menu1, menu2 } from "./Menu";
import axios from "axios";


function Home() {

  const logoutme=async()=>{
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
const history = useNavigate();
  const searched=(val)=>{
    // console.log(val)
   setSearchval(val);
   let b   = menu.find((elm)=>{
    return elm.desc == val;
   })
  //  console.log(b);
   setSearchedd(b);
  }

  const hideuser=()=>{
    
    const a=  document.getElementById('smInfo').children[2].style.transform="rotate(0deg)";
    document.querySelector('.showUser').style.display="none";
    setIsshown(false)

  }
  const {
    cartval,
    setCartval,
    cartmain,
    setCartmain,
    state,
    dispatch,
    sum,
    setSum,
    isshown,
    setIsshown,
    searchval,
    setSearchval,
    searchedd,
    setSearchedd,
    isorder,
    setIsorder,
    mydetails,
    setMydetails,
  } = useContext(cartContext);
 {searchval ?? console.log(searchval)}
  const getlocalitems = () => {
    const items = localStorage.getItem("cart");
    if (items) {
      return JSON.parse(localStorage.getItem("cart"));
    } else {
      return [];
    }
  };

  const setno = (id) => {
    const data = menu.find((elm) => {
      return elm.id == id;
    });

    setCartitems(
      cartitems.map((elm) => {
        if (elm.id == id && elm.no > 1) {
          elm.no = elm.no - 1;
          return elm;
        } else {
          return elm;
        }
      })
    );
  };

  const setno2 = (id) => {
    const data = menu.find((elm) => {
      return elm.id == id;
    });

    setCartitems(
      cartitems.map((elm) => {
        if (elm.id == id && elm.no < 10) {
          elm.no = elm.no + 1;
          return elm;
        } else {
          return elm;
        }
      })
    );
  };

  const [menu, setMenu] = useState([...menu1, ...menu2]);
  const [cartitems, setCartitems] = useState(getlocalitems());
  const [searcheditem , setSearcheditem]=useState("");

  const heart = (id) => {
    const data = menu.find((elm) => {
      return elm.id == id;
    });
    setCartitems([...cartitems, data]);
  };

  const setCartvalue = () => {
    setCartval([...new Set(cartitems)]);
  };

  if (cartval) {
    menu.map((elm) => {
      if (cartval.indexOf(elm.id) >= 0) {
      }
    });
  }
  {
    cartitems && setCartmain(cartitems);
  }
  {cartmain && setSum(cartmain.reduce((a,c)=>{
     return  a+(c.price*c.no)
  },0))}
  const getdata = async()=>{
    try{
     const res = await axios.get("/homee",{

     })
     if(res.status === 200){
      setMydetails(res.data);
     }else if(res.status === 201){
      history("/");
     }
    }catch(err){
      console.log(err);
    }
  }
 
  // localStorage.clear("cart")
  useEffect(
    () => {
      localStorage.setItem("cart", JSON.stringify(cartitems));
      setCartvalue();
      getdata();
    },[cartitems]);

  return (
    <>
      <div className="main">
        <Menubar />
        <div className="container">
          <Navbar searched={searched}/>
          <div className="centerDiv"onClick={hideuser}>
          <div className="showUser">
         <ul>
        <li>Home</li>
         <li>Notification</li>
         <li>Settings </li>
         <li onClick={logoutme}>Logout</li>
         </ul>
          </div>
            <Fooditems heart={heart} searcheddd={searchedd} /> 
           {cartitems.length > 0|| isorder || window.innerWidth <=851? <Cart setno={setno} setno2={setno2} />
           :
           <div className="homeCart"><p> add to cart something</p></div> }
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
