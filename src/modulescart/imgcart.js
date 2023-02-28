import React from "react";
// import './imgcontainer.css';
export default function ImageCart({props}) {
    console.log(props)
    var base64 = btoa(
        new Uint8Array(props.ImageProduct.data.data)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
    return (
        <>
            <img src={`data:image/jpeg;base64,${base64}`}
            style={{"height":"25vh"}}
            className="card-img-top" alt="..." />
        </>
    )
}