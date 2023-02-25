import { BACKEND } from "../backendjoin/backend"
export const createOrder = (userId, Token, OrderData) => {
    return fetch(`${BACKEND}/order-purchase/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: `${Token}`
        },
        body: JSON.stringify({ order: OrderData })
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}