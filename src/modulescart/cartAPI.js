import { BACKEND } from "../backendjoin/backend";
export const createOrder = (Userid, Token, OrderData) => {
    // delete OrderData.ImageProduct
    OrderData.forEach(X => {
        delete X['ImageProduct'];
    });
    console.log("",Userid, Token, OrderData)
    return fetch(`${BACKEND}/order-purchase/${Userid}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`
        },
        body: JSON.stringify({ order: OrderData })
    }).then(response => {
        return response.text()
    }).catch(err => console.log(err))
}