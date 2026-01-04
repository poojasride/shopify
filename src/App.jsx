import LogoComponant from "./logo";
import HeroBanner from "./HeroContent";
import ProductComponant from "./Products";
import BestSellerComponent from "./BestSeller";
import Content from "./FooterContent";
import "./App.css";

function App() {
  return (
    <>
      <LogoComponant />
      <HeroBanner />
      <BestSellerComponent />
      <ProductComponant />
      <Content />
    </>
  );
}

export default App;
