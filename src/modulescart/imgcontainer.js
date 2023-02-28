import React from "react";
export default function ImageCardContainer({props}) {

    // const base64String = btoa(
    //     String.fromCharCode(...new Uint8Array(props.ImageProduct.data.data))
    // )
    var base64 = btoa(
        new Uint8Array(props.ImageProduct.data.data)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
    return (
        <>
            <img src={`data:image/jpeg;base64,${base64}`}
            className="card-img-top" alt="..." />
        </>
    )
}