import React from "react";
import Hero from "./Components/Hero";
import {
  footerAPI,
  heroapi,
  highlight,
  popularsales,
  sneaker,
  story,
  toprateslaes,
} from "./data/data.js";
import Sales from "./Components/Sales";
import FlexContent from "./Components/FlexContent";
import Stories from "./Components/Stories";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
function App() {
  return (
    <>
      <NavBar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExist />
        <FlexContent endpoint={highlight} ifExist />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
}

export default App;
