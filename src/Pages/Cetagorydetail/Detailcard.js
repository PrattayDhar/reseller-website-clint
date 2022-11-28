import React, { useEffect, useState } from 'react';
import {  Card, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import {  Link } from 'react-router-dom';

const Detailcard = ({category}) => {
     const Handleverify = (id) => {
    fetch(`https://laptop-reseller-server-delta.vercel.app/product/report/${id}`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then(() => {
            alert('Reported')
         
          });
  }
   const [verify, setVerify] = useState([])
    useEffect(() => {
        fetch(`https://laptop-reseller-server-delta.vercel.app/verifyed/?email=${category?.Email}`)
            .then((res) => res.json())
            .then((data) => setVerify(data));
    }, []);
    return (
        <div>
            <Col >
                                    <Card >
                                        <Card.Img variant="top" src={category.img} style={{ height: '18rem' }} />
                                        <Card.Body className='cardmodel'>
                                           
                                            <Card.Title>Brand Name:{category.BrandName}</Card.Title>
                                            <Card.Title>Model:{category.model}</Card.Title>
                                            <Card.Title>Old Price:{category.Oldprice}</Card.Title>
                                            <Card.Title>Resellprice:{category.Resellprice}</Card.Title>
                                            <Card.Title>Buy Date:{category.Date}</Card.Title>
                                            <Card.Title>Condition:{category.Condition}</Card.Title>
                                              <p> Description:{category.description}</p>
                                        </Card.Body>
                                        <Card.Body className='cardmodel'>
                                            <Card.Body className='justify-content-around pt-3'>
                                                <p>Seller Name:{category.SellerName}{verify?.verify==="true"? <FaCheckCircle></FaCheckCircle>:"" }</p>
                                                <p> Seller Email:{category.Email}</p>
                                                <p> Seller Number:{category.Number}</p>
                                                <p> Seller Location:{category.Location}</p>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                <button className='btn btn-info'onClick={() => Handleverify(category._id)}>Report Product</button>
                                               </div>
                                               <div>
                                                 <button className='btn btn-info'><Link style={{ textDecoration: 'none' }} to={`/prepayment/${category._id}`}>Book Now
                                                </Link>
                                                </button>
                                               </div>
                                                </div>
                                               
                                               
                                            </Card.Body>
                                        </Card.Body>
                                    </Card>
                                </Col>
        </div>
    );
};

export default Detailcard;