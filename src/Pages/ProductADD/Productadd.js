
import React, { useState } from 'react'
import './Productadd.css'

const Productadd = () => {

    const [user, setUser] = useState({})
    const addservice = event =>{
        event.preventDefault();
        console.log(user);
        fetch("http://localhost:5000/productadd",{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Product Added')
                    event.target.reset()
                }
            })
    }
    const blr = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser)
    }
    return (
        <div>
            <section className="get-in-touch">
            <h1 className="title">Add Product</h1>

            <form onSubmit={addservice} className="contact-form row">
                    <div className="form-field col-lg-6 ">
                    <input onBlur={blr} name="SellerName" className="input-text js-input" type="text" required />
                    <label className="label my-3" >Seller Name</label>
                </div>
                    <div className="form-field col-lg-6 ">
                    <input onBlur={blr} name="Email" className="input-text js-input" type="email" required />
                    <label className="label my-3" >Email</label>
                </div>
                    <div className="form-field col-lg-6 ">
                    <input onBlur={blr} name="Number" className="input-text js-input" type="number" required />
                    <label className="label my-3" >Phone Number</label>
                </div>
                    <div className="form-field col-lg-6 ">
                    <input onBlur={blr} name="Location" className="input-text js-input" type="text" required />
                    <label className="label my-3" >Location</label>
                </div>
                <div className="form-field col-lg-6">
                    <input onBlur={blr} name="title" className="input-text js-input " type="text" required />
                    <label className="label my-3" htmlFor='name'>Model</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input onBlur={blr} name="BrandName" className="input-text js-input" type="text" required />
                    <label className="label my-3" >Brand Name</label>
                </div>
                <div className="form-field col-lg-12 ">
                    <input onBlur={blr} name="img" className="input-text js-input" type="text" required />
                    <label className="label my-3" >Laptop Image Url</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input onBlur={blr} name="Oldprice" className="input-text js-input" type="text" required />
                    <label className="label my-3" > OldPrice</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input onBlur={blr} name="Resellprice" className="input-text js-input" type="text" required />
                    <label className="label my-3" > Resell Price</label>
                </div>

                <div className="form-field col-lg-12">
                    <input onBlur={blr} name="description" className="input-text js-input" type="text" required />
                    <label className="label my-3" >Description</label>
                </div>
                <div className="form-field col-lg-12">
                    <button className="submit-btn" type="submit" value="Submit">Submit</button>
                </div>
            </form>

        </section>
        </div>
    );
};

export default Productadd;