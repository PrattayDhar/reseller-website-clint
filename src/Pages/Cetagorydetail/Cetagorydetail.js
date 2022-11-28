import {  Card, Col,    Row } from 'react-bootstrap';
import {  Link, useLoaderData } from 'react-router-dom';
import Detailcard from './Detailcard';

const Cetagorydetail = () => {
     const singleproductdetail = useLoaderData()  
     console.log(singleproductdetail);
    
      
    return (
        <div>
               <Row>
                
                <Col lg=""><p>Total Product:{singleproductdetail.length}</p>
                    <Row xs={1} md={3} className="g-4">
                        {
                           singleproductdetail.map(category =>
                                
                                <Detailcard category={category}></Detailcard>
                            )}
                    </Row></Col>

            </Row>

              
        </div>
    );
};

export default Cetagorydetail;