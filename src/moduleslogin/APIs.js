import { BACKEND } from "../backendjoin/backend"
export const getProfile = async (user) => {
    console.log("user data ",user)
    try {
        const response = await fetch(`${BACKEND}/user/profile?userEmail=${user}`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        })
        return await response.json()
    } catch (err) {
        return console.log("err", err)
    }
}
