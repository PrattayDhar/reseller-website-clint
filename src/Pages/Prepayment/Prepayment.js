import { loadStripe } from '@stripe/stripe-js';
import React, { useContext} from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Prepayment = () => {
      const { User } = useContext(AuthContext)
       const prepayment = useLoaderData()  
     
    const addservice = event =>{
        event.preventDefault();
        const form=event.target;
        const buyername= form.buyername.value;
        const buyeremail= form.Email.value;
        const buyernumber= form.number.value;
        const buyerlocation= form.Location.value;
        const BrandName= form.BrandName.value;
        const model= form.model.value;
        const Date= form.Date.value;
        const Resellprice= form.Resellprice.value;
        const id= form.id.value;

        const pay={
            buyername,
            buyeremail,
            buyernumber,
            buyerlocation,
            BrandName,
            model,
            Date,
            Resellprice,
            id

        }
        fetch("https://laptop-reseller-server-delta.vercel.app/paydetails",{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(pay)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Go To Dashboard Complete Your Payment')
                    event.target.reset()
                }
            })
    }
   
    return (
        <div>
           
               <section className="get-in-touch">
                  <h1 className="title">Payment Information</h1>

                 <form onSubmit={addservice} className="contact-form row">
                    <div className="form-field col-lg-6 ">
                    <input  name="buyername" className="input-text js-input" type="text" required value={User?.displayName} readOnly />
                    <label className="label my-3" >Buyer Name</label>
                </div>
                    <div className="form-field col-lg-6 ">
                    <input  name="Email" className="input-text js-input" type="email" required value={User?.email} readOnly />
                    <label className="label my-3" >Email</label>
                </div>
               
                    <div className="form-field col-lg-6 ">
                    <input  name="number" className="input-text js-input" type="number"  required />
                    <label className="label my-3" >Phone Number</label>
                </div>
                    <div className="form-field col-lg-6 ">
                    <input  name="Location" className="input-text js-input" type="text" required />
                    <label className="label my-3" >Location</label>
                </div>
                <div className="form-field col-lg-6">
                    <input name="model" className="input-text js-input " type="text" required value={prepayment.model} readOnly />
                    <label className="label my-3" htmlFor='name'>Model</label>
                </div>
                <div className="form-field col-lg-6">
                    <input name="id" className="input-text js-input " type="text" required value={prepayment._id} readOnly />
                    <label className="label my-3" htmlFor='name'>Product Id</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input name="BrandName" className="input-text js-input" type="text" required value={prepayment.BrandName} readOnly />
                    <label className="label my-3" >Brand Name</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input name="Date" className="input-text js-input" type="date" required />
                    <label className="label my-3" >Buying Date</label>
                </div>
                
                <div className="form-field col-lg-6 ">
                    <input name="Resellprice" className="input-text js-input" type="text" required  value={prepayment.Resellprice} readOnly />
                    <label className="label my-3" >Price</label>
                </div>
                <div className="form-field col-lg-12">
                    <button className="submit-btn mt-5" type="submit" value="Submit" >Processed</button>
                </div>
   
            </form>
               </section>
            
        </div>
    );
};

export default Prepayment;