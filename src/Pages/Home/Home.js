import React from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import img1 from '../../image/img1.jpg'
import img2 from '../../image/img2.jpg'
import Adver from '../Adver/Adver';
import './Home.css'

const Home = () => {
     const productcategory=useLoaderData()
     console.log(productcategory);
    return (
        <div>
       <Carousel className='pt-2 pb-4'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
             
            <Row>
                
                <Col lg=""><p>Total Brand:  {productcategory.length}</p>
                    <Row xs={1} md={3} className="g-4">
                        {
                            productcategory.map(category =>
                                
                                <Col >
                                    <Card >
                                        <Card.Img variant="top" src={category.img} style={{ height: '18rem' }} />
                                        <Card.Body className='cardmodel'>
                                           
                                            <Card.Title>Brand Name:{category.category}</Card.Title>
                                        </Card.Body>
                                        <Card.Body className='cardmodel'>
                                            <Card.Body className='d-flex  justify-content-around pt-3'>
                                                <h6>Find Your Laptop</h6>
                                                <button className='btn btn-info'><Link style={{ textDecoration: 'none' }} to={`/product/${category._id}`}>Details
                                                </Link>
                                                </button>

                                            </Card.Body>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}
                    </Row></Col>

            </Row>
            <Adver></Adver>
        </div>
        
    );
};

export default Home;