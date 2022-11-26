
import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthProvider';

const Muproduct = () => {
const HandleUpdate = (id) => {
    fetch(`http://localhost:5000/product/ad/${id}`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then(() => {
            alert('Product Advertised')
         
          });
  }
 
     const [allProduct, setProduct] = useState([])
   
      const hdlt = _id => {
        const agree = window.confirm(`Are You Sure delete ${_id}`)
        if (agree) {
            fetch(`http://localhost:5000/Sellerproduct/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Product removed')
                        const dltProduct = allProduct.filter(rev => rev._id !== _id)
                        setProduct(dltProduct)
                    }
                });
        }
    }
 const { User } = useContext(AuthContext);
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/Sellerproduct/?email=${User?.email}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
 console.log(products);
    return (
        <div>
           {products.map(product=>
            <table className="table table-primary">
                <thead>
    <tr>
      <th scope="col">Model</th>
      <th scope="col">BrandName</th>
      <th scope="col"></th>
      <th scope="col"></th>
      
    </tr>
  </thead>
   <tr>
    
      <td> Model:{product.model}</td>
      <td>Brand Name:{product.BrandName}</td>
        <td>
        <Button onClick={() => hdlt(product._id)}>Delete</Button></td>
      <th>
        <Button onClick={() => HandleUpdate(product._id)}>Advertisement</Button></th>

    </tr>   
    
  
            </table>
            
            )}

        </div>
    );
};

export default Muproduct;