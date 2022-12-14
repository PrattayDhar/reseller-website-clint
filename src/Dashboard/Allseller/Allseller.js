import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Allseller = () => {
    const allseller = useLoaderData()
    
     const [allUser, setUser] = useState([])
      const hdlt = _id => {
        const agree = window.confirm(`Are You Sure delete ${_id}`)
        if (agree) {
            fetch(`https://laptop-reseller-server-delta.vercel.app/sellers/${_id}`, {
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

    const Handleverify = (id) => {
    fetch(`https://laptop-reseller-server-delta.vercel.app/sellers/ver/${id}`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then(() => {
            alert('Verified')
         
          });
  }
    return (
        <div>
         {allseller.map(sellers=>
            <table className="table  table-primary">
                <thead>
    <tr>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
   <tr>
    
      <td>{sellers.Username}</td>
      <td>{sellers.email}</td>
      <td>
        <Button onClick={() => hdlt(sellers._id)}>Delete</Button></td>
        <td> {sellers?.verify==="true" ? <p>Verified</p> : <Button onClick={() => Handleverify(sellers._id)}>Verified</Button> }</td>
      

    </tr>   
    
  
            </table>
            
            )}
        </div>
    );
};

export default Allseller;