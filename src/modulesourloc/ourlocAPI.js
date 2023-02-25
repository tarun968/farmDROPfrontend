import { BACKEND } from "../backendjoin/backend"
export const AllShops = async () => {
    return fetch(`${BACKEND}/shopsbycountry`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
        },
    }).then(response => {
        // console.log(response)
        return response.json()
    }
    ).catch(err => console.log("err", err))
}

export const getAllImagesofUser = async (Token, UserId) => {
    console.log(Token, UserId)
    try {
        const response = await fetch(`${BACKEND}/all-images/${UserId}`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${Token}`
            },
        })
        return await response.json()
    } catch (err) {
        return console.log(err)
    }
}