import React from "react";
// import './imgcontainer.css';
export default function ImageCart({props}) {
    // public_id
    console.log(props)
    // var base64 = btoa(
    //     new Uint8Array(props.ImageProduct.data.data)
    //       .reduce((data, byte) => data + String.fromCharCode(byte), '')
    //   );
    return (
        <>
            <img src={`${props.ImageProduct.url}`}
            style={{"height":"25vh"}}
            className="card-img-top" alt="..." />
        </>
    )
}