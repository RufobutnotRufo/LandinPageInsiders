import "./Global.css";
import Header from "./Header/Header";
import MainCotent from "./MainContent/MainContent";
import BlockConetnt from "./BlockContent/BlockContent";
import OurValues from "./OurValues/OurValues";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <header>
        <Header />
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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
