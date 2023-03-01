import React from "react";
// import './imgcontainer.css';
export default function ImageCart({props}) {
    return (
        <>
            <img src={`${props.ImageProduct.url}`}
            style={{"height":"25vh"}}
            className="card-img-top" alt="..." />
        </>
    )
}