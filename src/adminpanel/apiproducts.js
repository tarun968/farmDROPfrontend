import { useState } from "react"
import { BACKEND } from "../backendjoin/backend"
export const AddProducts = async (Userid, Token, formData) => {
    // console.log("backend",BACKEND)
    console.log("user data ", Userid)
    console.log("user data ", Token)
    console.log("user data ", (formData))
    try {
        const response = await fetch(`${BACKEND}/add-product/${Userid}`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                // "Content-Type": "application/json",
                Authorization: `Bearer ${Token}`
            },
            body: (formData)
        })
        return await response.json()
    } catch (err) {
        return console.log("err", err)
    }
}

export const AddProducts2 = async (user, Token, ProductValues) => {
    console.log(ProductValues,user._id)
    // const {Token,user,formData} = User;
    try {
        const response = await fetch(`${BACKEND}/add-productNew/${user._id}`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                // "Content-Type": "application/json",
                Authorization: `Bearer ${Token}`
            },
            body:(ProductValues)
        })
        return await response.json()
    } catch (err) {
        return console.log("err", err)
    }
}
export const AllProducts = async (Userid, Token) => {
    return fetch(`${BACKEND}/All-Products/${Userid}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${Token}`

        },
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log("err", err))
}
// const [pageNo,setPangeNo] = useState(1);
export const ProductsGet = async (Token,pageNo) => {
    return fetch(`${BACKEND}/Products/?pageNo = ${pageNo}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
        },
    }).then(response => {
        console.log("repsonse",response)
        return response.json()
    }
    ).catch(err => console.log("err", err))
}
export const UpdateProduct = async (product,Userid, Token, formData) => {
    console.log("",product,Userid, Token, formData)
    return fetch(`${BACKEND}/update-product/${product}/item/${Userid}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${Token}`

        },
        body:(formData)
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log("err", err))

}
export const DeleteAProduct = async (product, adder, token) => {
    console.log(product, adder, token)
    return fetch(`${BACKEND}/product/${product}/${adder}`, {
        method: 'DELETE',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`

        },
        // body:product
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log("err", err))
}