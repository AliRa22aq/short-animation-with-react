
import React from "react";
import useWebAnimations, { slideInLeft} from "@wellyshen/use-web-animations";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";

function App() {
  const { ref } = useWebAnimations({ ...slideInLeft  });

  return (
    <div className="container" >
      <Header />
      <Body />
      <Body2 />
      <Body3 />
      <Footer />
    </div>
  );
}

export default App;

