import React from "react";
import './imgcontainer.css';
export default function ImageCart({props}) {

    const base64String = btoa(
        String.fromCharCode(...new Uint8Array(props.ImageProduct.data.data))
    )
    return (
        <>
            <img src={`data:image/jpeg;base64,${base64String}`}
            className="card-img-top" alt="..." />
        </>
    )
}