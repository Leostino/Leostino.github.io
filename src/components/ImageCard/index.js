import React from "react";
import "./style.css";

function ImageCard(props) {
    return ( 
      
      <div className="cardDiv">
        <div className="card">
            <img src={props.image} className="card-img-top" id={props.id} alt={props.name} key={props.id} onClick={() => props.clickImage(props.id)} />
        </div>
      </div>

    )
}


export default ImageCard;





//{/* <div className="card">
   //         <div className="card-body">
    //            <img className="card-img" src={props.image} alt={props.name} />
    //        </div>
     //       <div className="card-footer">
     //           {props.name}
     //       </div>
     //   </div> */}