import React from "react";

function Nav(props) {
    return (
        <div>
            
            <ul className="nav justify-content-end">
            <li className="nav-item">
                    <h2 className="nav-link active font-weight-bold" href="#"> {props.message}</h2>
                </li>
                <li className="nav-item">
                    <h3 className="nav-link active" href="#">Top Score: {props.topScore}</h3>
                </li>
                  
                <li className="nav-item">
                    <h3 className="nav-link active" href="#">Score: {props.score}</h3>
                </li>
  
            </ul>
        </div>

        
    )
}



export default Nav;