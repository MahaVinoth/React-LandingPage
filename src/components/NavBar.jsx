import React from "react";
// import PropTypes from "prop-types";


function NavBar({navdetails}) {
  return <>
        {navdetails.isnavHead ? <a href="#" className={!navdetails.isBtn ? "navbar-brand": "btn btn-primary"}>{navdetails.text}</a>
        :
        <>{!navdetails.isIcon ? <>{!navdetails.islast ? <><li className="list-inline-item"><a href="#!">{navdetails.text}</a></li><li className="list-inline-item">⋅</li></> : <li className="list-inline-item"><a href="#!">{navdetails.text}</a></li>}</>
        :
        <li className="list-inline-item me-4"><a href="#!"><i className={navdetails.icon}></i>{console.log("new....."+navdetails.text)}</a></li>}</>}

</>
}

export default NavBar;