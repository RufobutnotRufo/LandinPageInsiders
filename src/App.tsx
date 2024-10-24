import "./Global.css";
import Header from "./Header/Header";
import MainCotent from "./MainContent/MainContent";
import BlockConetnt from "./BlockContent/BlockContent";
import OurValues from "./OurValues/OurValues";
import Footer from "./Footer/Footer";
import SliderContent from "./SliderContent/SliderContent";
import Register from "./Register/Register";

function App() {
  return (

    <> 
      <header>
        <Header />
        <Register/>
      </header>
      <main>
        <section>
          <MainCotent />
        </section>
        <section>
          <BlockConetnt />
        </section>
        <section>
          <OurValues />
        </section>
        <section>
          <SliderContent />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
