import axios from "axios";
import { useState } from "react";
import "./blog.css";
import { useNavigate } from "react-router-dom";
// import FilterSection from "./components/FilterSection";
// import ProductList from "./components/ProductList";
// import Sort from "./components/Sort";
// import { useFilterContext } from "./context/filter_context";
// import { NavLink } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate()
   const [body,setBody] = useState("")
   const [ title,setTitle] = useState("")

  const handleSubmit = () => {
     axios.post("http://localhost:5000/product/add" , {
      body: body.split(/[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/),
      title:title.split(/[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/)
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

export default Products;
