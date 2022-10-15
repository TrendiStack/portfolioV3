import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="App bg-black text-white h-screen overflow-y-scroll lg:snap-y lg:snap-mandatory">
      <Cursor />
      <main className="md:max-w-[1440px] md:mx-auto h-full pt-5">
        <Nav />
        <div className="px-5 md:px-20 xl:px-0">
          <SideNav />
          <Menu />
          <Header />
          <Skills />
          <Work />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
