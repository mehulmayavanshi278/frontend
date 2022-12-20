import React from 'react'

function Secondline(props) {
  return (
    <>
         <div className="item"key={props.data.id}>
              <div className="itemImg">
                <img src={props.data.imgsrc} />
                <div className="forHeart">
                <i class="fa-solid fa-square-plus"onClick={()=>{props.heart(props.data.id)}}></i>
                </div>
              </div>
              <div className="itemDetails">
                <p>{props.data.name}</p>
                <h6>{props.data.price} rupees</h6>
            
              </div>
            </div>
    </>
  )
}

export default Secondline
