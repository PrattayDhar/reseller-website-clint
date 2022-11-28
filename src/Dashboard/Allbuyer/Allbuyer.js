import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Allbuyer = () => {
    const [allUser, setUser] = useState([])
    const allbuyer = useLoaderData()
      const hdlt = _id => {
        const agree = window.confirm(`Are You Sure delete ${_id}`)
        if (agree) {
            fetch(`https://laptop-reseller-server-delta.vercel.app/buyer/${_id}`, {
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
         {allbuyer.map(buyers=>
            <table className="table table-primary">
                <thead>
    <tr>
      <th scope="col">UserName</th>
      <th scope="col">Email</th><th>
        <Button onClick={() => hdlt(buyers._id)}>Delete</Button></th>
    </tr>
  </thead>
   <tr>
      <td>{buyers.Username}</td>
      <td>{buyers.email}</td>
    </tr>   
    
  
            </table>
            
            )}
        </div>
)};

export default Allbuyer;