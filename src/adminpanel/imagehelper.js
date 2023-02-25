import React from "react";
// import './del.css'
export default function ImageProductContainer({ product }) {
    return (
        <>
            <img src={`${BACKEND}/Photo/${product._id}`
            }
            />
        </>
    )
}