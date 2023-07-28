import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Posts />
      <Footer />
    </div>
  )
}
