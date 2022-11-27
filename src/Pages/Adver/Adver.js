import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Adver = () => {
     const [add, setadd] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/home/add')
            .then((res) => res.json())
            .then((data) => setadd(data));
    }, []);
    return (
        <div>
            <h2 className='mt-5'>Product Advertisement</h2>
             <Row>
                
              
                    <Row xs={1} md={3} className="g-4">
                        {
                            add.map(adds =>
                                
                                <Col >
                                    <Card style={{ height: '20rem',width:'20rem' }}>
                                        <Card.Img variant="top" src={adds.img} style={{ height: '18rem',width:'15rem' }} />
                                       <Card.Body className='cardmodel'>
                                           
                                            <Card.Title>Brand Name:{adds.model}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}
                    </Row>

            </Row>

        </div>
    );
};

export default Adver;