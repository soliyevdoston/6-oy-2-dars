import React from "react";
import Header from "./componentsHeader/Header";
import Footer from "./componentsFooter/Footer";
import Card1 from "./componentsCard1/Card1";
import Hero from "./componentsHero/Hero";
import Card2 from "./componentsCard2/Card2";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Card1></Card1>
      <Card2></Card2>
      <Footer></Footer>
    </div>
  );
}
