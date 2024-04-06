
import React from "react";

const Service=(props)=>{
  return(
    <>
      <div className="container text-align-center">
        <div className="row">
          <div className="card" style={{height:"130px",width:"300px"}}>
            <i className={props.serviceicon}></i>
            <h3>{props.serviceheading}</h3>
            <p>{props.servicepara}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Service;