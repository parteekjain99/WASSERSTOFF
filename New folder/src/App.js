import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./blog";
import Contact from "./Contact";
// import Cart from "./Cart";
// import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./Signup";
import Signin from "./Login";
// import Logout from "./Logout";
import { initialState,reducer } from "./reducer/UseReducer";
import Edit from "./components/Edit";

export const UserContext = createContext()


const App = () => {
  // context api 
  const [state , dispatch] = useReducer(reducer,initialState)




  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };





  return (

    <>
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
      <UserContext.Provider value={{state,dispatch}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>}/>
          <Route path='/get/:id' element={<Edit/>}/>
          {/* <Route path="/singleproduct/:id" element={<SingleProduct />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="/logout"  element={<Logout/>}/> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
      </Router>
    </ThemeProvider>
    </>
  );
};

export default App;
