
import { Card, Col,  Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

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

              
        </div>
    );
};

export default Cetagorydetail;