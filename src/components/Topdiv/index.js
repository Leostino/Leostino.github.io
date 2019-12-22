import React from "react";

import Header from "../Header"

import Nav from "../Nav"


function Topdiv(props) {
    return (
        <div className="d-flex justify-content-between border sticky-top bg-white">

            <Header>CLICKY GAME</Header>
            <Nav
              message={props.message}
              topScore={props.topScore}
              score={props.score}
            />
        </div>

    )
}


export default Topdiv;