import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col">
      <Header />
      <div className="bg-slate-100 flex-grow"> HEllo</div>
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
