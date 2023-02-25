import React from "react";
// import './del.css'
import { BACKEND } from "../backendjoin/backend";
export default function ImageProductContainer({ product }) {
    return (
        <>
            <img src={`${BACKEND}/Photo/${product._id}`
            }
            />
        </>
    )
}