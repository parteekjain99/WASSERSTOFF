// import React, { useState, useEffect } from "react";
// import axios from "axios";
import {  useParams } from "react-router-dom";





import axios from "axios";
import { useState } from "react";
// import "./blog.css";
import { useNavigate } from "react-router-dom";
// import FilterSection from "./components/FilterSection";
// import ProductList from "./components/ProductList";
// import Sort from "./components/Sort";
            // import { useFilterContext } from "./context/filter_context";
            // import { NavLink } from "react-router-dom";
            const Edit = () => {
                const [title, setTitle] = useState("");
                const [body, setBody] = useState("");
                // const { id } = useParams();
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
    // <Wrapper>
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
    // </Wrapper>
  );
  }
// const Wrapper = styled.section`
//   .textarea{
//     width:100%;
//     height:30%
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid-filter-column {
//       grid-template-columns: 1fr;
//     }
//   }
// `;

export default Edit;
