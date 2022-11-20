import {  useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
            



const Edit = () => {
                const [title, setTitle] = useState("");
                const [body, setBody] = useState("");
               
                const { id } = useParams();
                const navigate = useNavigate()
                
                
                const handleSubmit = () => {
                  
                    axios.put(`http://localhost:5000/get/${id}` ,{
                        title:title,
                        body,body
                    }).then(res => {
                        console.log(res)
            console.log(res.data)
            navigate('/')
        }).catch(err => {
      console.log(err)
  })
}


  return (
   
      <div className="container">

        <section className="section">
          <textarea type="text" className="t2"
          onChange={(e) => {
        setTitle(e.target.value)
        }}
        value={title}></textarea>
        <textarea autoComplete="off" className="t1" 
        onChange={(e) => {
                    setBody(e.target.value)
                }}
                value={body}
                ></textarea>
            <button onClick={handleSubmit}>Done</button>
        </section>
        
      </div>
   
  );
  }


export default Edit;
