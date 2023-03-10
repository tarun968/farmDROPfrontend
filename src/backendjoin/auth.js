import {BACKEND} from './backend'
export const signup = (user) => {
    console.log("backend",BACKEND)
    console.log("user data ",user)
    return fetch('${BACKEND}/signup', {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(response => {
        // console.log(response.text())
        return response.json()
    }
    ).catch(err => console.log("err", err))
}

export const signin = (user) => {
    console.log("",user)
    return fetch(`${BACKEND}/signin`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log("err", err))
}

export const authenticate = (data, next) => {
    console.log('data',data)
    if (typeof window !== 'undefined') {
        localStorage.setItem("jwt", JSON.stringify(data))
        next();
    }
}

export const signout = (next) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem("jwt")
        next();
    }
    return fetch(`${BACKEND}/signout`, {
        method: 'POST'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const isAuthenticated = () => {
    if(typeof window === 'undefined'){
        return false;
    }
    if (localStorage.getItem("jwt")) {
        console.log("",typeof window === 'undefined');
        return JSON.parse(localStorage.getItem("jwt"))
    }
    else{
        return false
    }
}