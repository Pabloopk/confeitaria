import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Product from "./components/Product";
import Review from "./components/Review";
import Footer from "./components/Footer";
import ScrollingText from "./components/ScrollingText";
import GoogleMap from "./components/GoogleMap";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="menu">
          <Menu />
        </div>

         <div id="products">
          <Product />
        </div>

        <div id="about">
          <About />
        </div>
        

       

        <div id="review">
          <Review />
        </div>
        <div className="lg:mb-10">
          <ScrollingText
              text="com amor e carinho para seus dias mais doces!"
              speed={20} // Tempo em segundos para o texto percorrer a tela
            />
         </div>

         <GoogleMap/>
      </main>

      <Footer />
    </div>
  );
};

export default App;
