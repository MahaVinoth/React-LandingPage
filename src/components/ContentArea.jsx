import React from "react";


function ContentArea({contentdetails}) {
  
  return <div className="row g-0">
            <div className={contentdetails.Id===2 ? "col-lg-6 order-lg-1 my-auto showcase-text" : "col-lg-6 my-auto showcase-text"}><h2>{contentdetails.Txt}</h2><p className="lead mb-0">{contentdetails.Desc}</p></div>
            <div className="col-lg-6 text-white showcase-img"><img src={contentdetails.src} alt="image1"/></div>
        </div>
}

export default ContentArea;