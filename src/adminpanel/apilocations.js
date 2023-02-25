import { BACKEND } from "../backendjoin/backend"
export const AddShop = async (Userid, Token, formData) => {
    console.log(formData)
    try {
        const response = await fetch(`${BACKEND}/add-shop/${Userid}`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${Token}`
            },
            body: (formData)
        })
        return await response.json()
    } catch (err) {
        return console.log("err", err)
    }
}