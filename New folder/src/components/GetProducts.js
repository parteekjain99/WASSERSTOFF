import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../styles/Button";
import { Link } from "react-router-dom";

const GetProducts = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    handleSubmit();
  }, []);




const handleSubmit = () => {
    // console.log(email, password)
    axios.get('http://localhost:5000/get')
    .then(res => {
        setUser(res.data.reverse())
    })
}





  return (
    <div className="container">
      <div className="py-4">
        <h1>topic list</h1>
           {/* <Button onClick={handleSubmit}></Button> */}
            {users.map((user, index) => (
              <div key={user._id}>
                
                <h2 scope="row">{index + 1}</h2>
                
                
                 
                  <div className="card">
                     <div className="card-body">
                       <div className="main">
                         <h3 >{user.title} :{user.percentage}</h3>
                        
                         
                       </div>
                     </div>
                     
              </div>
                <Link class="btn btn-primary mr-2" to={`/get/${user._id}`}>
                edit
              </Link>
                  </div>
                
           
              
              
            ))}
        
      </div>
    </div>
  );
};

export default GetProducts;