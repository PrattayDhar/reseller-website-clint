import React, { useEffect, useState } from 'react';

const Reportiteam = () => {
     const [report, setreport] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/home/add')
            .then((res) => res.json())
            .then((data) => setreport(data));
    }, []);
    return (
        <div>
             {report.map(reports=>
            <table className="table  table-primary">
                <thead>
    <tr>
         <th scope="col">User Id</th>
      <th scope="col">SellerName</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
    </tr>
  </thead>
   <tr>
       <td>{reports._id}</td>
      <td>{reports.SellerName}</td>
      <td>{reports.Email}</td>
    </tr>   
    
    
  
            </table>
            
            )}
        </div>
    );
};

export default Reportiteam;