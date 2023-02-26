import React from "react";

const DisplayGame = (props) => {
    return (
        <>
            {props.show && props.children}
        </>
    )
}

export default DisplayGame;