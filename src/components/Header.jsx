import React, { useState } from "react";
import foodio from "../assets/foodio.jpg";

const Header = () => {
    const [Login, setLogin] = useState("Login");


    const handleLogin = () => {
        if (Login === "Login") {
            setLogin("Logout")
        } else {
            setLogin("Login")
        }
    }


  return (
    <div className="bg-blue-200  justify-between text-center h-20 w-full flex flex-row pl-4 pr-12">
      <div className="flex items-center justify-center gap-4">
          <img src={foodio} alt="logo" className="h-10 w-10 inline-block rounded-full " />
        <h1 className="inline-block text-2xl font-bold">Foodie</h1>
      </div>
      <div className="flex items-center justify-center">
        <ul className="flex justify-center gap-4 mt-2">
          <li className="text-lg">Home</li>
          <li className="text-lg">About</li>
          <li className="text-lg">Contact</li>
          <li className="text-lg">Blog</li>
          <li className="text-lg px-7 flex justify-center items-center bg-yellow-100 w-28" onClick={handleLogin}>{Login}</li>
        </ul>
      </div>

    </div>
  );
};

export default Header;
