import React from "react";
import { useState } from "react";
import { isAuthenticated } from "../backendjoin/auth";
import Menu2 from "../menu/menu2";
import { NewsAdder } from "./newsapi";
import { useEffect } from "react";
export default function AddNews() {
    const { user, Token } = isAuthenticated();
    console.log("user", user)
    const [NewsDetails, SetNews] = useState({
        Headline: "",
        News: "",
        loading: false,
        NewNews:"",
        error: false,
        Adder: user.Email,
        DateNews: new Date(),
    })

    const { Headline, loading,
        error, News, NewNews, DateNews} = NewsDetails

    const preload = () => {
        SetNews({ ...NewsDetails })
    }
    useEffect(() => {
        preload();
    }, []);
    const onSubmit = (event) => {
        event.preventDefault();
        var formData =  new FormData();
        formData.append("Headline",NewsDetails.Headline)
        formData.append("News",NewsDetails.News)
        formData.append("Adder",NewsDetails.Adder)
        formData.append("ImageNews",NewsDetails.ImageNews)
        formData.append("DateNews",NewsDetails.DateNews)
        formData.append("Quantity",NewsDetails.Quantity)
        formData.append("Adder",user.Email)
        SetNews({ ...NewsDetails, error: "", loading: true })
        NewsAdder(user._id, Token, formData).then(data => {
            if (data.error) {
                SetNews({ ...NewsDetails, error: false });
            } else {
                SetNews({
                    ...NewsDetails,
                    Headline: "",
                    News: "",
                    error: true,
                    loading: false,
                    Adder: user.Email,
                    Date: new Date(),
                    NewNews: data.Headline
                });
            }
        });
    }

    const handleChange = name => event => {
        const value = name === "ImageNews" ? event.target.files[0] : event.target.value
        console.log(name, value)
        // formData.set(name, value);
        SetNews({ ...NewsDetails, [name]: value });
    }
    return (
        <>
            <Menu2 />
            <div className="col-md-12">
                <div className="h-100 w-75 mx-auto bg-white">
                    <form className="p-5 mx-auto">

                        <div className="mb-3">
                            <label for="formGroupExampleInput6" className="form-label" style={{ fontWeight: 'bold' }}>PhotoGraph of the News</label>
                            <input type="file"
                                accept="image"
                                className="form-control"
                                id="formGroupExampleInput6"
                                onChange={handleChange("ImageNews")}
                                name="ImageNews"
                            />
                        </div>
                        <label for="formGroupExampleInput3" className="form-label" style={{ fontWeight: 'bold' }}>Headline of the News</label>
                        <input
                            className="form-control"
                            id="formGroupExampleInput90"
                            aria-label="Default select example"
                        name="ImageNews"
                        onChange={handleChange("Headline")}
                        value={Headline}
                        />

                        <label for="formGroupExampleInput4" className="form-label" style={{ fontWeight: 'bold' }}>News</label>
                        <textarea
                            className="form-control"
                            id="formGroupExampleInput4"
                            aria-label="Default select example"
                        onChange={handleChange("News")}
                        name="News"
                        value={News}
                        />

                        {/* <label for="formGroupExampleInput4" className="form-label" style={{ fontWeight: 'bold' }}>Product ID</label>
                        <input
                            type='text'
                            className="form-control"
                            id="formGroupExampleInput4"
                            aria-label="Default select example"
                        // onChange={handleChange("ProductID")}
                        // name="ProductID"
                        // value={ProductID}
                        /> */}


                        {/* <div className="mb-3">
                            <label for="formGroupExampleInput6" className="form-label" style={{ fontWeight: 'bold' }}>Quantity</label>
                            <input
                                type="number"
                                className="form-control"
                                id="formGroupExampleInput6"
                            // onChange={handleChange("Quantity")}
                            // value={Quantity}
                            />
                        </div> */}

                        <div className="mb-3">
                            {/* <label for="formGroupExampleInput6" className="form-label" style={{ fontWeight: 'bold' }}>Added By</label> */}
                            <input
                                className="form-control"
                                id="formGroupExampleInput6"
                                // onChange={handleChange("AddedBy")}
                                // name="AddedBy"
                                // value={user.Email}
                                readOnly
                                hidden
                            />
                        </div>


                        <div className="mb-3">
                            <input
                                type="date"
                                className="form-control"
                                id="formGroupExampleInput6"
                                // onChange={handleChange("DateofAdd")}
                                // name="DateofAdd"
                                value={new Date().toLocaleDateString()}
                                hidden
                            />
                        </div>
                        {/* {successSignup} */}
                        {/* {errorSignup(error)} */}
                        <button
                            onClick={onSubmit}
                            type="submit"
                            className="w-100 btn-primary"
                            style={{ backgroundColor: "#0274be", fontWeight: 'bold' }}>Add Product</button>
                    </form>
                    {/* {SuccessMessage()}
                    {ErrorMessage()} */}
                </div>
            </div>

        </>
    )
}