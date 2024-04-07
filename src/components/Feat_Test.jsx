import React from "react";
import TMicon from "../assets/tm.png";


function Feat_Test({ftdetails}) {
  
  return <>
    {ftdetails.isFeature ? ( 
      <div className="col-lg-4">
        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex"><i className={ftdetails.icon}></i></div>
            <h3>{ftdetails.Txt}</h3>
            <p className="lead mb-0">{ftdetails.Desc}</p>
        </div>
      </div>):(
          <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
              <img className="img-fluid rounded-circle mb-3" src={TMicon} alt="..."/>
              <h5>{ftdetails.Txt}</h5>
              <p className="font-weight-light mb-0">{ftdetails.Desc}</p>
          </div>
          </div>
      )
      }
    </>
}

export default Feat_Test;