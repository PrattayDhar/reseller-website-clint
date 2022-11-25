import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Allseller = () => {
    const allseller = useLoaderData()
     const [allUser, setUser] = useState([])
   
      const hdlt = _id => {
        const agree = window.confirm(`Are You Sure delete ${_id}`)
        if (agree) {
            fetch(`http://localhost:5000/buyer/${_id}`, {
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
         {allseller.map(sellers=>
            <table className="table table-primary">
                <thead>
    <tr>
      <th scope="col">UserName</th>
      <th scope="col">Email</th><th>
        <Button onClick={() => hdlt(sellers._id)}>Delete</Button></th>
    </tr>
  </thead>
   <tr>
    
      <td>{sellers.Username}</td>
      <td>{sellers.email}</td>
        

    </tr>   
    
  
            </table>
            
            )}
        </div>
    );
};

export default Allseller;