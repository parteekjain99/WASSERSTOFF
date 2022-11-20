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
      // use regex for if user type any special character then give a space 
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
        <textarea autoComplete="on" className="t1" 
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


export default Products;
