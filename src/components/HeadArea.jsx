import React from "react";
// import PropTypes from "prop-types";


function HeadArea({headdetails}) {
  
  return <>
    <div className="row wholeTextDiv">
      <div className="col-xl-6">
        <div className="text-center text-white">
        <h1 className="mb-5">{headdetails.isHead ? <>{headdetails.hTxt}</>:<>{headdetails.fTxt}</>}</h1>
          <form className="form-subscribe">
          <div className="row">
            <div className="col"><input className="form-control form-control-lg" placeholder={headdetails.inTxt}/></div>
            <div className="col-auto"><button className="btn btn-primary btn-lg disabled" type="submit">{headdetails.btnTxt}</button></div>
          </div>
          </form>
        </div>
      </div>
    </div>
    
  </>
}

export default HeadArea;