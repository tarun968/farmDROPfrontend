import { BACKEND } from "../backendjoin/backend"
export const GetuserDetails = async (Userid, Token) => {
    return fetch(`${BACKEND}/user/${Userid}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`
        },
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log("err", err))
}


export const GetuserOrder = async (Userid, Token,Date) => {
    return fetch(`${BACKEND}/Order/users/${Userid}/?query=${Date}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`
        },
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log("err", err))
}



export const GetuserOrders = async (Userid, Token) => {
    return fetch(`${BACKEND}/Orders/${Userid}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`
        },
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log("err", err))
}

export const GetAuserOrder = async (Userid, Token, OrderID) => {
    console.log("order id",OrderID)
    return fetch(`${BACKEND}/Order/${Userid}/one/${OrderID}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`
        },
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log("err", err))
}

export const OrderStatusFetch = (userId,token) => {
    console.log(userId,token)
    return fetch (`${BACKEND}/order/status/admin/${userId}`,{
        method:'GET',
        headers :{
            Accept:"application/json",
            "Content-type":"application/json",
            Authorization:`Bearer ${token}`
        }
    }).then(
        res => {
            return res.json()
        }).catch(error => console.log(error))
}

export const OrderStatusUpdate = (orderId,userId,token,status) => {
    console.log(orderId,userId,token,status)
    // /order/update/status/admin/:adder
    return fetch (`${BACKEND}/update/status/admin/${userId}`,{
        method:'PUT',
        headers :{
            Accept:"application/json",
            "Content-type":"application/json",
            Authorization:`Bearer ${token}`
        },
    body: JSON.stringify({status,orderId})
    }).then(
        res => {
            return res.json()
        }).catch(error => console.log(error))
}


export const UpdateUserdetails = (Userid,token,values) => {

    return fetch(`${BACKEND}/users/update/${Userid}`, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body:JSON.stringify(values)
    }).then(response => {
        return response.text()
    }).catch(error => console.log(error))
}