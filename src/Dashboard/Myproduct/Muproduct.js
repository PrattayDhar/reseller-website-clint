
import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthProvider';

const Muproduct = () => {
const HandleUpdate = (id) => {
    fetch(`https://laptop-reseller-server-delta.vercel.app/product/ad/${id}`, {
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
            fetch(`https://laptop-reseller-server-delta.vercel.app/Sellerproduct/${_id}`, {
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
        fetch(`https://laptop-reseller-server-delta.vercel.app/Sellerproduct/?email=${User?.email}`)
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
        <td> {product?.advertise==="true" ? <p>Advertised</p> : <Button onClick={() => HandleUpdate(product._id)}>Advertisement</Button> }</td>
       
    </tr>   
            </table>
            
            )}

        </div>
    );
};

export default Muproduct;