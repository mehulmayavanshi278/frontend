import React from 'react'

function Thirdline(props) {
  return (
    <>
       <div className="item1"key={props.data.id}>
            <div className="item1Img">
              <img src={props.data.imgsrc}alt=""/>
              <div className="forHeart">
                <i class="fa-solid fa-square-plus"onClick={()=>{props.heart(props.data.id)}}></i>
                </div>
            </div>
            <div className="item1Details">
              <p>{props.data.name}</p>
              <p>{props.data.price}</p>
            </div>
          </div>
    </>
  )
}

export default Thirdline
