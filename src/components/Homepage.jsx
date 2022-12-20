import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Home from './Home'
function Homepage() {


  const history = useNavigate();
    const [islogin , setIslogin]=useState(false);
    const [ userdata , setUserdata] = useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        address:"",
        zender:"",
    })
    const getdata = async()=>{
      try{
        const res = await axios.get("/homee",{
     
        })
        if(res.status === 200){
         history("/Home");
        }else{
          
        }
      }catch(err){
       console.log(err);
      }
     }
    const inputevent=(e)=>{
   const {name , value} = e.target;
   setUserdata({...userdata,[name]:value})
     }
     const logintbtn=async(e)=>{
      e.preventDefault();
      const {email,password}=userdata
        try{
       if(email && password){
         const res = await axios.post("/login",{
          email,password
         })
         if(res.status == 200){
          history("/Home");
         }else{
          alert(res.data);
         }
       }else{
        alert("fill the data");
       }
        }catch(err){
          console.log(err);
        }
     }
     const submitbtn=async(e)=>{
      e.preventDefault();
      const {name , email ,phone , password , address , zender} = userdata;
       try{
        if(name && email && phone && password && address && zender){
          const res = await axios.post("https://serverbymehultwo.onrender.com/register",{
            name , email ,phone , password , address , zender
           })
           if(res.status == 200){
            alert('done');
            setUserdata({
              name:"",
              email:"",
              phone:"",
              password:"",
              address:"",
              zender:"",
            })
            setIslogin(true);
           }
        }else{
          alert("fill the data");
        }


       }catch(err){
        console.log(err);
       }
     }
     useEffect(()=>{
      getdata();
     },[])
  return (
    <>
      <div className="hpmain">
        <div className="hpmainc">
          <img src="./images/mainhpp.png"></img>
        </div>
        <div className="form">
        <form method="post"> 
          <div className="greetme">
           { islogin ? <p>login here</p>  : <p>signup here</p>}
          </div>
          { !islogin && <div className="name">
            <input type="text" placeholder="your name" name="name"value={userdata.name} onChange={inputevent}/>
          </div>}
          <div className="name">
            <input type="email" placeholder="your email" name="email"value={userdata.email} onChange={inputevent} />
          </div>
         { !islogin && <div className="name">
            <input type="text" placeholder="phone" name="phone"value={userdata.phone} onChange={inputevent} />
          </div>}
          <div className="name">
            <input type="password" placeholder="your passsword" name="password"value={userdata.password} onChange={inputevent}/>
          </div>
       { !islogin &&  <div className="name">
            <input type="text" placeholder="address" name="address"value={userdata.address} onChange={inputevent}/>
          </div>}
          { !islogin && <div className="sex">
            male <input type="radio" name="zender" value="male"onChange={inputevent}/>
            female <input type="radio" name="zender" value="female"onChange={inputevent} />
          </div>}
          <div className="name">
           {  !islogin ? <button type="submit"onClick={submitbtn}>signup</button>
           : <button type="submit"onClick={logintbtn}>signup</button>}
          </div>
          <div className="name">
           { !islogin  ? <p onClick={()=>{setIslogin(true)}}> already sign up ? login</p> 
                : <p onClick={()=>{setIslogin(false)}}> don't have an account ? signup</p> }
          </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Homepage;
