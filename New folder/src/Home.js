// import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import { useEffect } from "react"
import { Link , useNavigate } from 'react-router-dom'
import GetProducts from "./components/GetProducts";
import {UserContext} from "./App"
import { useContext } from "react";
import { Button } from "./styles/Button";
 import { Container } from "./styles/Container";
const Home = () => {
  const {state,dispatch} = useContext(UserContext)
  const data = {
    name: "Wasserstoff ",
  };


  const navigate = useNavigate()

  useEffect(() => {
      const token = localStorage.getItem('TOKEN')
      if (!token) {
          navigate('/signin')
      }else{
        navigate("/")
      }
  }, [])



  return (
    <>
      <HeroSection myData={data} />
      {/* <FeatureProduct /> */}
        {/* <div className="coin" > */}
        <Container>

          <Link to='/products'><Button>+</Button></Link>
        </Container>
        
        


      <GetProducts/>
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
