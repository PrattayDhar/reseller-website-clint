import {  Card, Col,    Row } from 'react-bootstrap';
import {  Link, useLoaderData } from 'react-router-dom';

const Cetagorydetail = () => {
     const singleproductdetail = useLoaderData()  
     console.log(singleproductdetail);
      
    return (
        <div>
               <Row>
                
                <Col lg=""><p>Total Product:  {singleproductdetail.length}</p>
                    <Row xs={1} md={3} className="g-4">
                        {
                           singleproductdetail.map(category =>
                                
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
                                                <p> Seller Name:{category.SellerName}</p>
                                                <p> Seller Email:{category.Email}</p>
                                                <p> Seller Number:{category.Number}</p>
                                                <p> Seller Location:{category.Location}</p>
                                               
                                                <button className='btn btn-info'><Link style={{ textDecoration: 'none' }} to={`/prepayment/${category._id}`}>Book Now
                                                </Link>
                                                </button>
                                            </Card.Body>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}
                    </Row></Col>

            </Row>

              
        </div>
    );
};

export default Cetagorydetail;