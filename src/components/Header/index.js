import React from "react";


function Header(props) {
    return (
       
        <h1 className="font-weight-bold d-inline ml-3">{props.children}</h1>
  
    )
}



export default Header;