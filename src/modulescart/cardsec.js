import React from "react";
import ImageCardContainer from "./imgcontainer";
import Cards from "./cart";
import { ProductsGet } from "../adminpanel/apiproducts";
import { useState,useEffect } from "react";
import { isAuthenticated } from "../backendjoin/auth";
const Cardsproduct = () => {

    const { user, Token } = isAuthenticated()
    const [Products, SetProducts] = useState([])
    const [pageNo,setPangeNo] = useState(1);
    const preload = () => {
        ProductsGet(Token,pageNo).then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                SetProducts((Prev) => [...Prev,data.message])
            console.log(Products)
            }
        })
    }
    useEffect(() => {
        preload()
    }, [pageNo])
    const handleInfiniteScroll = async () =>{
        try{
            if(window.innerHeight + document.documentElement.scrollTop + 1 
                >= document.documentElement.scrollHeight)
                {
                    setPangeNo((prev) => (prev + 1)) 
                }
        }catch(error)
        {
            console.log("error",error)
        }
    }
    useEffect(() => {
      window.addEventListener("scroll",handleInfiniteScroll);
      return () => window.removeEventListener("scroll",handleInfiniteScroll)   
    })
    return (
        <>
            <div className="row">
                <div className="mx-auto row row-cols-md-2 col-md-9 gx-0 my-5">
                    <div class="col-md-12">
                        <section class="">
                            <h4 className="">All Products</h4>
                        </section>
                    </div>
                    <div class="col-md-12">
                        <section class="d-flex justify-content-space-between">
                            <form className="">
                                <select class="form-select w-100 float-right" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </form>
                        </section>
                    </div>
                    {/* <ImageCardContainer image={content.IMG} /> */}
                    {(
                        Products.map((content, index) => {
                            {/* console.log('->', content) */}
                            return (
                                <div className="col mx-2"
                                    style={{ width: '30%' }}
                                >
                                <Cards Props={content}/>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </>
    )
}


export default Cardsproduct