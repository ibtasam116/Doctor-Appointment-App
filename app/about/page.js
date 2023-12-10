import Header from "../(components)/header/header";
import About from "./(components)/about/about";
import Footer from "../(components)/footer/footer";
import Navbar from "../(components)/navbar/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <Header header_title="About" />
      <About />
      <Footer />
    </>
  );
}
