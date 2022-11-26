import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthProvider';

const Muproduct = () => {
  //   const { User } = useContext(AuthContext);
  // const {
  //   data: products
    // isLoading,
    // refetch,
  // } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: async () => {
      // const res = await fetch(`http://localhost:5000/Sellerproduct/?email=${User?.email}`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  
 
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
      <th>
        <Button onClick={() => hdlt(product._id)}>Delete</Button></th>
    </tr>
  </thead>
   <tr>
    
      <td> Model:{product.model}</td>
      <td>Brand Name:{product.BrandName}</td>
        

    </tr>   
    
  
            </table>
            
            )}

        </div>
    );
};

export default Muproduct;