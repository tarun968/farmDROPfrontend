import React from "react";
import Menu2 from "../menu/menu2";
import { GetuserOrder } from "./profileAPIs";
import { isAuthenticated } from "../backendjoin/auth";
import Footer from "../pages/footer";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Orders() {
    const { user, Token } = isAuthenticated();
    const { User } = useParams()
    const [DateSort, setDateSort] = useState(true);
    const [Orders, SetOrders] = useState([])
    const preload = () => {
        GetuserOrder(User, Token, "Date").then(
            data => {
                SetOrders(data)
            }
        )
    }
    const sortBydate = () => {
        GetuserOrder(User, Token, "amount").then(
            data => {
                SetOrders(data)
            }
        )
    }
    useEffect(() => {
        preload()
    }, [])


    return (
        <>
            <Menu2 />
            <div className="row row-cols-md-2 col-md-8 gx-0 mx-auto">
                <h1 class="ms-5 mt-5">
                    Sort Orders By
                </h1>
                <div className="d-flex flex-row ms-5">
                    <button type="button" class="text-light btn-outline-light btn btn-m"
                        style={{ backgroundColor: 'rgb(144, 181, 1)' }}>
                        Date
                    </button>
                    <button type="button"
                        onClick={() => { sortBydate() }}
                        className="text-light btn-outline-light btn btn-m"
                        style={{ backgroundColor: 'rgb(144, 181, 1)' }}>
                        Amount
                    </button>
                </div>
                <div class="w-100 ms-4 mt-2"
                    style={{ height: "fit-content" }}>
                    <ul class="list-group list-group-flush my-2">
                        {Orders.map((index, element) => {
                            console.log(index)
                            return (
                                <li className="w-100 list-group-item nav-item d-flex flex-row">
                                    <Link className="mx-2 nav-link" style={{ color: "Black" }} aria-current="page" to={`order/${index._id}/`}>
                                        Order ID:{index._id}
                                    </Link>
                                    <Link className="nav-link mx-2 " style={{ color: "Black" }} aria-current="page" to={`order/${index._id}/`}>
                                        Date:
                                        {index.Date.substring(0, 10)}
                                    </Link>
                                    <Link className="nav-link mx-2" style={{ color: "Black" }} aria-current="page" to={`order/${index._id}/`}>
                                        Amount:{index.amount}
                                    </Link>
                                    <Link className="mx-2 nav-link" style={{ color: "Black" }} aria-current="page" to={`order/${index._id}/`}>
                                        Status:{index.status}
                                    </Link>
                                    {/* <Link className="nav-link mx-2" style={{ color: "Black" }} aria-current="page" to={`order/${index._id}/`}>
                                    Address:{index.address}
                                    </Link>
                                    <Link className="nav-link mx-2" style={{ color: "Black" }} aria-current="page" to={`order/${index._id}/`}>
                                        Order Amount:{index.amount}
                                    </Link> */}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}