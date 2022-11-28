import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Myorder = () => {
    const{User}=useContext(AuthContext)
     const [myorder, setmyorder] = useState([])
    useEffect(() => {
        fetch(`https://laptop-reseller-server-delta.vercel.app/myorders/?email=${User?.email}`)
            .then((res) => res.json())
            .then((data) => setmyorder(data));
    }, []);
     const [allUser, setUser] = useState([])
      const hdlt = _id => {
        const agree = window.confirm(`Are You Sure delete ${_id}`)
        if (agree) {
            fetch(`https://laptop-reseller-server-delta.vercel.app/myproduct/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('user removed')
                        const dltuser = allUser.filter(rev => rev._id !== _id)
                        setUser(dltuser)
                    }
                });
        }
    }
    return (
        <div>
         {myorder.map(orders=>
            <table className="table  table-primary">
                <thead>
    <tr>
      <th scope="col">OderID</th>
      <th scope="col">Email</th>
      <th scope="col">Product</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
   <tr>
    
      <td>{orders._id}</td>
      <td>{orders.buyeremail}</td>
      <td>{orders.model}</td>
      <td>
        <Button onClick={() => hdlt(orders._id)}>Remove</Button></td>
         <td> <Button ><Link style={{ textDecoration: 'none' }} to={`/payment/${orders._id}`}>Pay</Link></Button></td>
        
      

    </tr>   
    
  
            </table>
            
            )}
        </div>
    );
};

export default Myorder;