import { createContext, useReducer, useState } from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Homepage from "./components/Homepage";
export const  cartContext = createContext();

 const reducer = (state,action)=>{
    if(action.type==="user"){
      return action.payload
    }
    return state;
 }
function App(){ 


  const [cartval,setCartval]=useState();
  const [cartmain,setCartmain]=useState();
  const [state,dispatch] = useReducer(reducer , 1);
  const [sum , setSum]=useState();
  const [isshown,setIsshown]=useState(false);
  const [searchval,setSearchval]=useState("");
  const [searchedd , setSearchedd] = useState();
  const [isorder , setIsorder]=useState(false);
  const [mydetails,setMydetails]=useState();
  return (
    <>
    <cartContext.Provider value={{cartval , setCartval , cartmain , setCartmain ,
                                 state , dispatch , sum,setSum,isshown,setIsshown ,
                                 setSearchval,searchval,searchedd,setSearchedd, 
                                 isorder,setIsorder,mydetails ,setMydetails}}>
   <Routes>
   <Route exact path="/" element={<Homepage/>} > </Route>
     <Route exact path="/home" element={<Home/>} > </Route>
     <Route exact path="/dashboard" element={<Home/>} > </Route>

   </Routes>
    </cartContext.Provider>
    </>
  );
  }

export default App;
